import {useStore} from "../store/useStore.ts";

class Control extends HTMLElement {
  private shadow: ShadowRoot;
  constructor() {
    super();

    this.shadow = this.attachShadow({mode: 'open'});
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();

    const runButton = this.shadow.getElementById('run');
    if (runButton) {
      runButton.onclick = this.run
    }
  }

  run () {
    const store = useStore();
    console.log(store);
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        #container {
            background-color: #2B2D30;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: start;
            padding-left: 20px;
            border-bottom: #1E1F22 solid 1px;
        }
        
        section {
           height: 100px;
           width: 100%;
        }
        
        #main {
          padding: 10px;
          position: fixed;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        
        #run {
            color: #A5A7AC;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        #run:hover {
            background-color: #606165;
        }
      </style>
       
      <section>
        <div id="main">
          <div id="container">
            <span id="run">&#9658;</span>
          </div>
        </div>
      </section> 
    `;
  }


}
customElements.define('app-control', Control);