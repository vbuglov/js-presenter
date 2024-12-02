const makeStyle = () => {
  return `
  
    <style>
      #container {
          min-height: 100px;
          padding-bottom: 20px;
          width: 100%;
      }
      
      #wrapper {
          display: flex;
          position: relative;
          margin-bottom: 0.5rem;
      }
    
      #editor {
        width: min(90vw, 1000px);
        text-align: left;
        transition: all .3s;
        overflow: hidden;
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
      
      .hide {
        height: 50px;
      }
    </style>
  
  `
}

export default makeStyle;
