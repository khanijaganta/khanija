console.log('create array from argument range');

function generateArrayFromRange(startNum, endNum) {
  const rangeArray = [];
  for(let curNum = startNum; curNum <= endNum; curNum++) {
   
    rangeArray.push(curNum);
  
  }
  return rangeArray;
}

const range1 = generateArrayFromRange(2, 6);
console.log(range1);
console.log('----------');
const range2 = generateArrayFromRange(-4, 2);
console.log(range2);