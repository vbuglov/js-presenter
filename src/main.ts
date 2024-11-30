import './style.css'
import { setupCounter } from './counter.ts'
import {dracula} from 'thememirror';
import {basicSetup, EditorView} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"
import "./components/Block.ts"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="p-10 flex justify-center items-center" id="main">
    <div id="container">
        <div style="width: min(90vw, 1000px);" class="text-left" id="editor"></div>
        <block-code color="red" radius="100"/>
        <div style="width: min(90vw, 1000px);" class="text-left" id="addblock"></div>
    </div>
  </div>
`
const main = () => {
  const editor = document.getElementById('editor')

  if (editor) {
    new EditorView({
      doc: "console.log('hello')\n",
      extensions: [basicSetup, javascript(), dracula],
      parent: editor,
    })
  }

}

main();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
