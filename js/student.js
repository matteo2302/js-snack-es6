console.log("jsok");
const students = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84,
  },
];

const betterThan70 = students.filter((student) => {
  return student.grades > 70;
});
console.log(betterThan70);
const betterThan70idmore120 = students.filter((student) => {
  return student.grades > 70 && student.id > 120;
});
console.log(betterThan70idmore120);
const names = students.map((student) => {
  return student.name.toUpperCase();
});
console.log(names);
