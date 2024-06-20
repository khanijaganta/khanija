console.log('19-array-excludes-value-to-new-array');

function excludes(arrayToExclude, elementsToExcluded) {
  console.log('arrayToExclude: ', arrayToExclude);
  console.log('elementsToExcluded: ', elementsToExcluded);
  const outputArray = [];
  for(let curElement of arrayToExclude) {
    if(!elementsToExcluded.includes(curElement)) {
      outputArray.push(curElement)
    }
  }
  return outputArray;
}

const versionArray = [2,4,3,6,8,7];
const newVesionArray = (excludes(versionArray, [6]));
console.log('newVesionArray: ', newVesionArray);

console.log('          ');

const ageArray = [12,16,20,24,28,30];
const newAgeArray = (excludes(ageArray, [22,30]));
console.log('newAgeArray: ', newAgeArray);