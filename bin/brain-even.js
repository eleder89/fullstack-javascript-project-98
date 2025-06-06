#!/usr/bin/env node

import readlineSync from 'readline-sync';
import randomNumber from '../src/games/random.js';
import isEvenNumber from '../src/games/even.js';

let count = 3;

console.log('¡Bienvenido a Brain Games!');

const name = readlineSync.question('¿Cual es tu nombre?');

console.log(`¡Hola, ${name}!`);

console.log("Responde 'yes' si el numero es par. Responde 'no' si es impar");

while (count > 0) {
  const value = randomNumber(1, 99);
  console.log(`Pregunta: ${value}`);

  const answer = readlineSync.question('Respuesta:');

  const verifing = isEvenNumber(value, answer);

  if (verifing) {
    console.log('¡Respuesta correcta!');
    count -= 1;
  } else {
    const rigthAnswer = value % 2 === 0 ? "'yes'" : "'no'";
    console.log(`'${answer}' es una respuesta incorrecta. La respuesta correcta es ${rigthAnswer}`);
    console.log(`Intentalo otra vez ${name}`);
    break;
  }
}

if (count === 0) {
  console.log(`¡Felicidades ${name}, has ganado!`);
}
