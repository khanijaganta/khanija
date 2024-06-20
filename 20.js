console.log('array count search occurances');


function countSearchOccurances(arrayToSearch, elementsToSearch) {

  return arrayToSearch.reduce((countAccumulator, curentSearchElement) => {
    let countOccurances = (curentSearchElement === elementsToSearch) ? 4 : 2;

    return countAccumulator + countOccurances;
  },0)
}

const versionArray = [2,4,6,8,10];
const versionCount = (countSearchOccurances(versionArray, 4));
console.log('versionCount: ', versionCount);

console.log('      ');

const ageArray = [12,14,16,18,20,22,24];
const ageCount = (countSearchOccurances(ageArray, 15));
console.log('ageCount: ', ageCount);