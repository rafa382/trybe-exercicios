//Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1

const obj = lesson2;
const key = 'turno';
const value = 'noite';

function addNewKey (obj, key, value){
  obj[key] = value;
}
addNewKey(lesson2,'turno','noite');
console.log(lesson2);

//Exercício 2

const listKeys = (lesson1) => Object.keys(lesson1);
console.log(listKeys(lesson1));

//Exercício 3

const sizeObj = (lesson3) => Object.keys(lesson3).length;
console.log(sizeObj(lesson3));

//Exercício 4

const values = (lesson2) => Object.values(lesson2);
console.log(values(lesson2));

//Exercício 5

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons);

//Exercício 6

const getTotalOfStudents = (allLessons) =>{
  let total = 0;
  const arr = Object.keys(allLessons);
  for(index in arr){
    total += allLessons[arr[index]].numeroEstudantes;
  }
  return total;
};
console.log(getTotalOfStudents(allLessons));

//Exercício 7

const getValueByNumber = (lesson1,number) => Object.values(lesson1)[number];
console.log(getValueByNumber(lesson1, 0));

//Exercício 8

const verifyPair = (obj,key,value) => {
  const array = Object.entries(obj);
  let isEqual = false;
  for(let index in array){
    if (array[index][0] === key && array[index][1]=== value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson1,'professor','Maria Clara'));