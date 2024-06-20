console.log('object equality');


function Student(name, age, rank, country) {
  this.name = name;
  this.age = age;
  this.rank = rank;
  this.country = country;
}

let Students1 = new Student('khanija', 22, 3, 'India');
console.log('Students1', Students1);

let Students2 = new Student('khanija', 22, 3, 'India');
console.log('Students2', Students2);

console.log('      ');
function isObjectEqual(obj1, obj2){
  return obj1.name === obj2.name &&
         obj1.age === obj2.age &&
         obj1.rank === obj2.rank &&
         obj1.country === obj2.country
}

console.log('isEqual', isObjectEqual(Students1, Students2));

console.log('       ');


function isObjectPointSame(obj1, obj2){
  return obj1 === obj2;
}

let isSame1 = isObjectPointSame(Students1, Students2);
console.log('isSame1', isSame1);

let Students3 = Students2;
let isSame2 = isObjectPointSame(Students2, Students3);
console.log('isSame2', isSame2);