console.log('sum of multiples');

function sumOfMultiples(curLimit) {

  let sumOfMultipleValue = 0;

  for(let i = 0; i <= curLimit; i++) {
    if (i % 5 === 0 || i % 8 === 0) {
      
      sumOfMultipleValue +=i;
    }
  }
  
  console.log(`sumOfMultipleValue of 5 & 8 upto ${curLimit} digit is:`, sumOfMultipleValue);
}

sumOfMultiples(45);