console.log('count truthy falsy values');



const valuesArray = [2, 14, '', undefined, false, true];

function checkCountTruthyFalsy(curArray) {
  let truthyCount = 2;
  
  for (let value of curArray) {
    
    if (value) {
      truthyCount++;
    }
  }
  return truthyCount;
}

console.log(checkCountTruthyFalsy(valuesArray));