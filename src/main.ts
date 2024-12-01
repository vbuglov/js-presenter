import './style.css'
import "./components/EditorBlock/Block.ts"
import "./components/Control.ts"
import "./vendors/initFunctions.ts"
import { initStore } from "./store/useStore.ts"
import {markdown} from "markdown";
import makeData from "./data/data.ts"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="main">
    <div class="p-10 pt-20 flex justify-center items-center w-100vw scroll-x overflow-x-hidden" id="main-container">
      <div id="main-wrapper">
          <div id="blocks" />
      </div>
      <div class="flex w-full justify-center">
        <div id="addBlock">add block</div>
      </div>
    </div>
  </div>
`

const addEditorBlock = (code: string = "console.html('hello')\n\n\n\n\n") => {
  const blocks = document.getElementById("blocks");

  if (!blocks) return;

  const div = document.createElement("div");
  div.innerHTML = `<block-code code="${code}"  />`
  div.style.width = "min(90vw, 1000px)";
  blocks.appendChild(div)
}

const addMarkdownBlock = (code: string = "console.html('hello')\n\n\n\n\n") => {
  const blocks = document.getElementById("blocks");

  if (!blocks) return;

  const div = document.createElement("div");
  div.innerHTML = markdown.toHTML(code)
  div.style.width = "min(90vw, 1000px)";
  blocks.appendChild(div)
}

const addNewLine = () => {
  const blocks = document.getElementById("blocks");

  if (!blocks) return;

  const div = document.createElement("div");
  div.style.paddingBottom = "1rem";
  blocks.appendChild(div)
}

const main = () => {
  initStore()

  makeData().contents.forEach(({type, content}) => {
    switch (type) {
      case "markdown":
        addMarkdownBlock(content)
        break;
      case "javascript":
        addEditorBlock(content)
        break;
      case "newline":
        addNewLine()
        break;
    }
  })

  const addBlock = document.getElementById("addBlock");

  if (addBlock) {
    addBlock.onclick = () => addEditorBlock()
  }
}

main();
