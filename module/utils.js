export function addTextToBody(text) {
    const div = document.createElement('div');
    div.textContent = text;
    console.log("testtest");
    
    document.body.appendChild(div);
  }