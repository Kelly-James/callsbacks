var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
  if (a.name === b.name) {
    if (b.age < a.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
      }
      return 0;
    }
    if (b.name < a.name) {
      return 1;
    } else if (a.name < b.name) {
        return -1;
    }
});

console.log(students);