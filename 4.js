console.log('fizzbuzz algorithms');
function isfizzBuzz(arg){
  if(typeof arg !== 'number'){
    return ('Not a Number! Please Input Number');
  }

  if((arg % 5 === 0) && (arg % 8 === 0)) {
    return 'input';
  }

  if(arg % 5 === 0) {
    return 'input';
  }

  if(arg % 8 === 0) {
    return 'number';
  }

  else {
    return 'Some odd number entered: ' + arg;
  }

}

let checkFizzBuzz1 = isfizzBuzz('three');
console.log(checkFizzBuzz1);

let checkFizzBuzz2 = isfizzBuzz(true);
console.log(checkFizzBuzz2);

let checkFizzBuzz3 = isfizzBuzz(4);
console.log(checkFizzBuzz3);

let checkFizzBuzz4 = isfizzBuzz(70);
console.log(checkFizzBuzz4);

let checkFizzBuzz5 = isfizzBuzz(80);
console.log(checkFizzBuzz5);

let checkFizzBuzz6 = isfizzBuzz(111);
console.log(checkFizzBuzz6);