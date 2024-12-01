import './style.css'
import "./components/Block.ts"
import "./components/Control.ts"
import "./vendors/initFunctions.ts"
import { initStore } from "./store/useStore.ts"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="main">
    <div class="p-10 pt-20 flex justify-center items-center" id="main-container">
      <div id="main-wrapper">
          <div style="width: min(90vw, 1000px);" class="text-left" id="editor"></div>
          <div id="blocks">
            <div><block-code /></div>
            <div><block-code /></div>
            <div><block-code /></div>
          </div>
          <div class="flex w-full justify-center">
            <div id="addBlock">add block</div>
          </div>
      </div>
    </div>
  </div>
`
const main = () => {
  initStore()

  const addBlock = document.getElementById("addBlock");
  const blocks = document.getElementById("blocks");

  if (!addBlock) return;

  addBlock.onclick = () => {
    const div = document.createElement("div");
    div.innerHTML = `<block-code />`
    blocks.appendChild(div)
  }
}

main();
