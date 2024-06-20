console.log('marks average grade');


const MARKSARRAY = [50, 65, 40, 85];

function calculateAverage(currentArray) {
  let total = 0;
  for (let curValue of currentArray) {
    total += curValue;
  }

  return (total/currentArray.length);
}

;

function calculateGrades(_currentArray) { 
  const average = calculateAverage(_currentArray);


  if(average < 30) return grade = 'D'; 
  if(average < 50) return grade = 'C';
  if(average < 70) return grade = 'B';
  if(average <= 100) return grade = 'A';
}

console.log('Grade:',calculateGrades(MARKSARRAY));