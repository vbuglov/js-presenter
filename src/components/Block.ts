import {basicSetup, EditorView} from "codemirror";
import {javascript} from "@codemirror/lang-javascript";
import {dracula} from "thememirror";
import { playFill } from "./Icons.ts";

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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attributeChangedCallback(_name, _oldVal, _newVal) {
    this.render();
  }

  run (current, e) {
    const block = this.shadow.getElementById("block");
    block.innerHTML = "";

    console.html = (value: any) => {
      const code = document.createElement("code");
      const br = document.createElement("br");
      code.innerHTML = JSON.stringify(value);
      block.appendChild(code)
      block.appendChild(br)
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
      const editor =  new EditorView({
        doc: "console.html('hello')\n\n\n\n\n",
        extensions: [basicSetup, javascript(), dracula],
        parent: editorBlock,
      })

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
      <style>
        #container {
            min-height: 100px;
            padding-bottom: 20px;
            width: 100%;
        }
        
        #wrapper {
            display: flex;
            position: relative;
        }
      
        #editor {
          width: min(90vw, 1000px);
          text-align: left;
        }
        
        .icon {
            color: #A5A7AC;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s;
            width: 20px;
            height: 20px;
        }
        
        .icon:hover {
            background-color: #606165;
        }
        
        #control {
          position: absolute;
          left: -50px;
        }
        #block {
            width: 100%;
            color: white;
        }
      </style>
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