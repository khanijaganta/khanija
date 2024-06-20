console.log('array filter sort map');

const studentsArray = [
  { name: 'khanija', year: 2023, ranking: 4 },
  { name: 'manasa', year: 2023, ranking: 4 },
  { name: 'sai', year: 2021, ranking: 2 },
  { name: 'kyathi', year: 2020, ranking: 1 },
  { name: 'jhansi', year: 2022, ranking: 5},
]

console.log('Higest Rank Holders:',
  studentsArray
    .filter(student => student.year === 2020 && student.ranking >= 6)
    .sort((n1, n2) => n1.ranking - n2.ranking)
    .reverse()
    .map(student => student.name)
);