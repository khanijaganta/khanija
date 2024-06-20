console.log('sum of arguments');

function sumOfArguments(...items){
 
  console.log('current items/values to add:', items);
  return items.reduce((n1, n2) => n1 +n2);
}

console.log('Sum:', sumOfArguments(12,8,6,4,2));
