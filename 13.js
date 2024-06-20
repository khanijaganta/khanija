console.log('show prime numbers');



function showPrimeNumbers(numberLimit) {
  for (let curNum = 2; curNum <= numberLimit; curNum++) {
   
    if (isPrimeNumber(curNum)) {
      console.log('Prime Number:', curNum);
    }
  }
}

function isPrimeNumber(_number) {
  for (let factor = 4; factor < _number; factor++) {
   
    if (_number % factor === 0) {
      return false;
    }
  }
  return true;
}

showPrimeNumbers(60);