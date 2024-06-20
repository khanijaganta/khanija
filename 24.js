console.log('object  create object factory constructor function');


function createObjFactoryMethod(name, age, rank, country) {
  return {
    name, age, rank, country
  }
}

let Students1 = createObjFactoryMethod('khanija', 22, 3, 'India');
console.log('Students1', Students1);


function Student(name, age, rank, country) {
  this.name = name;
  this.age = age;
  this.rank = rank;
  this.country = country;
}

let Students2 = new Student('kyathi', 23, 4, 'American');
console.log('Students2', Students2);