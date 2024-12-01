import {EditorView} from "codemirror";
import { playFill } from "../Icons.ts";
import makeEditor from "./Editor.ts";
import setConsoleFunctions from "./consoleFunctions.ts";
import makeStyle from './makeStyle.ts';

class Block extends HTMLElement {
  private shadow: ShadowRoot;
  private editor: EditorView | undefined;
  constructor() {
    super();

    this.id = Math.random().toString(36).slice(-8);
    this.shadow = this.attachShadow({mode: 'open'});
  }

  static get observedAttributes() {
    return [];
  }

  get code() {
    if (!this.getAttribute('code')) {
      return 'console.html(\'hello\')\n\n\n\n\n';
    }

    return this.getAttribute('code');
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attributeChangedCallback(_name, _oldVal, _newVal) {
    this.render();
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run (current, _e) {
    const block = this.shadow.getElementById("block");

    if (block) {
      block.innerHTML = "";
      setConsoleFunctions(block)
    }

    const value = current.editor.state.doc.toString()

    eval(value);
  }

  connectedCallback() {
    this.render();

    const editorBlock = this.shadow.getElementById('editor')

    const runButton = this.shadow.getElementById('run');

    if (runButton) {
      runButton.onclick = (e) => this.run(this, e);
    }

    if (editorBlock) {
      const editor = makeEditor(this.code, editorBlock)

      if (!document.appStore) {
        document.appStore = {}
        document.appStore.editors = {}
      }

      this.editor = editor;
      document.appStore.editors[this.id] = this.editor;
    }
  }

  render() {
    this.shadow.innerHTML = `
      ${makeStyle()}
      <div id="container">
        <div id="wrapper">
          <div id="control">
            <div id="run" class="icon">
              ${playFill}
            </div>
          </div>
          <div id="editor"></div>
        </div>
        <div id="block"></div>
      </div> 
    `;
  }
}

customElements.define('block-code', Block);

export default  Block