class DivNesting {
  constructor (nesting,) {
    this.nesting = nesting.replace(/\s/g, "").split(">");
    this.openTag ="<div";
    this.closeTag = "</div";
    this.DIV_PAIR = {
      [this.closeTag]: this.openTag
    };
  }

  divNestingCulc() {
    let stack = [];
    let maxNesting = 0;
    let currentNesting = 0;

    for(let i = 0; i < this.nesting.length; i++) {
      let currentTag = this.nesting[i];
      if (this.openTag === currentTag) {
        stack.push(currentTag);
        currentNesting++;
        if (currentNesting > maxNesting) maxNesting = currentNesting;
      } else {
        let topElement = stack[stack.length - 1];

        if (this.DIV_PAIR[currentTag] === topElement) {
          stack.pop();
          currentNesting--;
        } else {
          return false;
        }
      }
    }
    return maxNesting;
  }
}

function divDisplay(value) {
  let parent = document.getElementsByClassName("nesting")[0];
  let content = document.createElement("div");
  content.className ="nesting__number theme";
  content.textContent = value;
  parent.append(content);
}

document.querySelector("button").addEventListener("click", function listener() {
  let file = document.getElementById('file').files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    let nesting = new DivNesting(reader.result);
    console.log(nesting.divNestingCulc());
    divDisplay(nesting.divNestingCulc());
  }
  reader.onerror = function() {
    console.log(reader.error);
  }
  document.querySelector("button").removeEventListener('click', listener);
})