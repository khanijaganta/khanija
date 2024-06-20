console.log('sum of arguments array');

function sumOfArguments(...items){
  
  if(items.length === 1 && Array.isArray(items[0])) {
    
    items = [...items[0]]
    console.log('current items/values to add:', items);
    return items.reduce((n1, n2) => n1 +n2);
  }
}


console.log('Sum:', sumOfArguments([12,8,6,4,2]));