console.log('array includes element exists');

function includes(arrayToSearch, elementToSearch) {
  console.log('arrayToSearch: ', arrayToSearch);
  console.log('elementToSearch: ', elementToSearch);
  for(let curElement of arrayToSearch) {
    if(curElement === elementToSearch) {
      return true;
    } 
  }
  return false;
}

const versionArray = [2,5,4,7,8,1];
console.log(includes(versionArray, 4));
console.log('     ');
const ageArray = [12, 14, 22, 28, 22];
console.log(includes(ageArray, 6));