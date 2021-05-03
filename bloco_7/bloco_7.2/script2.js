const assert = require('assert')
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

const addTurnoManha = (objeto, chave, valor) => objeto[chave] = valor;

  addTurnoManha(lesson2, 'turno', 'manhã');
  

const listarKeys = (objeto) => Object.keys(objeto);
  



const tamanhoDoObjeto = (objeto) => Object.entries(lesson2).length;


const listarValores = (objeto) =>  Object.values(objeto);
  
const allLessons = {
  lesson1,
  lesson2,
  lesson3,
};

const numeroDeEstudantes = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

