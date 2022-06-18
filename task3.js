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

// вставьте в эту переменную иную вложенность, если требуется
let testString = `
<div>
    <div>
        <div></div>
        <div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div>
                    <div>
                        <div></div>
                        <div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        <div>
            <div></div>
            <div>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</div>
`
let nesting = new DivNesting(testString);
console.log(nesting.divNestingCulc())