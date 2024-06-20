console.log('object string properties key');

function showStringProperties(curObj) {
  for(let key in curObj) {
   
    if(typeof(curObj[key]) === 'string') {
      console.log(key,':', curObj[key]);
    }
  }
}

const Person = {
  name: 'khanija',
  age: 22,
  height: 5.6,
  country: 'India',
  designation: ' software Developer'
}

showStringProperties(Person);
console.log('        ');

const Technology = {
  name: 'JavaScipt',
  version: 6 ,
  purpose: 'To develop webpage',
  developer: 'Netscape Corporator'
}

showStringProperties(Technology);
console.log('----------');