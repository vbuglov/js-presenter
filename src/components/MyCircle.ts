class Block extends HTMLElement {
  private shadow: ShadowRoot;
  constructor(el) {
    super();

    if (!this.hasAttribute('color')) {
      this.setAttribute('color', 'red');
    }
    if (!this.hasAttribute('radius')) {
      this.setAttribute('radius', '100');
    }

    this.shadow = this.attachShadow({mode: 'open'});
  }

  get color() {
    return this.getAttribute('color');
  }

  set color(val) {
    this.setAttribute('color', val);
  }

  get radius() {
    return this.getAttribute('radius');
  }

  set radius(val) {
    this.setAttribute('radius', val);
  }

  static get observedAttributes() {
    return ['color', 'radius'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
    let radiusInput = this.shadow.querySelector('#radius');
    let colorInput = this.shadow.querySelector('#color');
    radiusInput.addEventListener('change', this.changeRadius.bind(this));
    colorInput.addEventListener('change', this.changeColor.bind(this));
  }

  changeRadius(e) {
    this.setAttribute('radius', e.target.value);
  }
  changeColor(e) {
    this.setAttribute('color', e.target.value);
  }

  connectedCallback() {
    this.render();
    let radiusInput = this.shadow.querySelector('#radius');
    let colorInput = this.shadow.querySelector('#color');
    radiusInput.addEventListener('change', this.changeRadius.bind(this));
    colorInput.addEventListener('change', this.changeColor.bind(this));
  }

  render() {
    this.shadow.innerHTML = `
            <style>
                .circle {
                    width: ${this.radius}px;
                    height: ${this.radius}px;
                    background-color: ${this.color};
                    border-radius: 50%;
                    margin-bottom: 20px;
                }
            </style>
            <div>
                <h2>My Circle</h2>
                <div class="circle" id='circle'></div>
                <div>
                    <input value="${this.radius}" id="radius" type="number" min="1" placeholder="radius"/>
                    <input value="${this.color}" id="color" type="text" placeholder="color"/>
                </div>
            </div> 
        `;
  }


}
customElements.define('block-code', Block);