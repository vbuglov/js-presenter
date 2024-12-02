// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { EditorView, ViewPlugin } from '@codemirror/view';
import { Diagnostic, linter } from '@codemirror/lint';
import { basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { autocompletion } from '@codemirror/autocomplete';
import * as tsvfs from '@typescript/vfs';
import ts from 'typescript';
import { hoverTooltip } from '@codemirror/view';
import {dracula} from "thememirror";

// init typescript vfs and lang service
const compilerOptions = {};
const fsMap = await tsvfs.createDefaultMapFromCDN(
  compilerOptions,
  ts.version,
  true,
  ts
);
fsMap.set('index.ts', ' ');

const system = tsvfs.createSystem(fsMap);
const env = tsvfs.createVirtualTypeScriptEnvironment(
  system,
  ['index.ts'],
  ts,
  {}
);

// displays errors
function tsErrorLinter() {
  const tsErrors = env.languageService
    .getSemanticDiagnostics('index.ts')
    .concat(env.languageService.getSyntacticDiagnostics('index.ts'));
  return tsErrors.map((tsError) => ({
    from: tsError.start,
    to: tsError.start + tsError.length,
    severity: 'error',
    message:
      typeof tsError.messageText === 'string'
        ? tsError.messageText
        : tsError.messageText.messageText,
  }));
}

const makeEditor = (code: string, parent: HTMLElement) => {
  const editor = new EditorView({
    doc: code,
    extensions: [
      dracula,
      basicSetup,
      javascript({
        typescript: true,
      }),
      // linter(tsErrorLinter as () => Diagnostic[], {
      //   delay: 0,
      // }),
      autocompletion({ override: [tsComplete] }),
      hoverTooltip(tsTypeDefinition),
      ViewPlugin.fromClass(
        class {
          update() {
            env.updateFile('index.ts', editor.state.doc.toString() || ' ');
          }
        }
      ),
    ],
    parent,
  });

  return editor
}


// displays autocompletes
function tsComplete(ctx) {
  const tsCompletions = env.languageService.getCompletionsAtPosition(
    'index.ts',
    ctx.pos,
    {}
  );

  if (!tsCompletions) return { from: ctx.pos, options: [] };

  const text = ctx.state.doc.toString();

  let lastWord, from;
  for (let i = ctx.pos - 1; i >= 0; i--) {
    if ([' ', '.', '\n', ':', '{'].includes(text[i]) || i === 0) {
      from = i === 0 ? i : i + 1;
      lastWord = text.slice(from, ctx.pos).trim();
      break;
    }
  }

  if (lastWord) {
    tsCompletions.entries = tsCompletions.entries.filter((completion) =>
      completion.name.startsWith(lastWord)
    );
  }

  return {
    from: ctx.pos, // Autocomplete position
    options: tsCompletions.entries.map((completion) => ({
      label: completion.name,
      apply: (view) => {
        view.dispatch({
          changes: { from, to: ctx.pos, insert: completion.name },
        });
      },
    })),
  };
}

function tsTypeDefinition(view, pos, side) {
  const { from, to, text } = view.state.doc.lineAt(pos);
  let start = pos,
    end = pos;
  while (start > from && /\w/.test(text[start - from - 1])) start--;
  while (end < to && /\w/.test(text[end - from])) end++;
  if ((start == pos && side < 0) || (end == pos && side > 0)) return null;

  const program = env.languageService.getProgram();
  const typeChecker = program.getTypeChecker();
  const token = getTokenAtPosition(program.getSourceFile('index.ts'), pos);
  const type = typeChecker.getTypeAtLocation(token);

  return {
    pos: start,
    end,
    above: true,
    create() {
      const dom = document.createElement('div');
      dom.innerHTML =
        '<pre>' +
        typeChecker.typeToString(
          type,
          undefined,
          ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.InTypeAlias
        ) +
        '</pre>';
      return { dom };
    },
  };
}

function isTokenKind(kind: ts.SyntaxKind) {
  return kind >= ts.SyntaxKind.FirstToken && kind <= ts.SyntaxKind.LastToken;
}

function getTokenAtPosition(
  parent: ts.Node,
  pos: number,
  sourceFile?: ts.SourceFile
) {
  if (pos < parent.pos || pos >= parent.end) return;
  if (isTokenKind(parent.kind)) return parent;
  if (sourceFile === undefined) sourceFile = parent.getSourceFile();
  return getTokenAtPositionWorker(parent, pos, sourceFile);
}

function getTokenAtPositionWorker(
  node: ts.Node,
  pos: number,
  sourceFile: ts.SourceFile
) {
  outer: while (true) {
    for (const child of node.getChildren(sourceFile)) {
      if (child.end > pos && child.kind !== ts.SyntaxKind.JSDocComment) {
        if (isTokenKind(child.kind)) return child;
        // next token is nested in another node
        node = child;
        continue outer;
      }
    }
    return;
  }
}

export default makeEditor