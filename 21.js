console.log('array get max largest number');
function getLargestNumber(arrayToSearch) {
  if (arrayToSearch.length <= 0) return 'Array is Empty! Nothing to search!!';

  return arrayToSearch.reduce((largetNumber, curentSearchElement) => {
    return (curentSearchElement > largetNumber) ? curentSearchElement : largetNumber;
  })
}

const versionArray = [2,4,6,8,10];
const largestVersion = (getLargestNumber(versionArray));
console.log('largestVersion: ', largestVersion);

console.log('     ');

const ageArray = [12,14,16,18,20,22,24];
const maxAge = (getLargestNumber(ageArray));
console.log('maxAge: ', maxAge);