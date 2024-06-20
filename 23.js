console.log('object create students and address object');

const Students = {
  name: 'khanija',
  age: 22,
  rank: 3,
  country: 'India',
}

const Address = {
  street: 'Bapulapadu',
  city: 'Hanuman Junction',
  pinCode: 521105,
  state: 'Andhra Pradesh',
  country: 'India',
}

function showObjectDetails(obj) {
  for(let key in obj) {
    console.log(key,' : ',obj[key]);
  }
}

showObjectDetails(Students);
console.log('    ');
showObjectDetails(Address);