// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
const setConsoleFunctions = (block: HTMLElement) => {

  console.render = (el: HTMLElement) => {
    block.appendChild(el);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  console.html = (value: any) => {
    const code = document.createElement("code");
    const br = document.createElement("br");
    code.innerHTML = JSON.stringify(value);
    block.appendChild(code)
    block.appendChild(br)
  }

  console.drop = () => {
    block.innerHTML = "";
  }

  console.innerHTML = (value: any) => {
    block.innerHTML = value;
  }
}

export default setConsoleFunctions
