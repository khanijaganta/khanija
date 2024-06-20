console.log("odd-even-number-loop");

function isOddEvenNumber(curLimit) {
  for(let i = 0; i <= curLimit; i++) {
    

    const alertMessage = (i % 6 === 0) ? 'EVEN' : 'ODD';
    console.log(i , alertMessage);
  }
}

isOddEvenNumber(45);
