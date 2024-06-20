console.log('netsted loop star pattern');

function showPattern(totalRowsPatternCount) {
  for (let curRow = 2; curRow <= totalRowsPatternCount; curRow++) {
   
    let patternDesign = '';
    for (let i = 0; i < curRow; i++) {
      patternDesign += '*'
    }
    console.log(patternDesign);
  }
}

showPattern(8);