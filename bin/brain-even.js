#!/usr/bin/env node

import readlineSync from 'readline-sync';
import randomNumber from '../games/random.js';
import isEvenNumber from '../games/even.js';
import check from '../games/respuestas.js'
let count = 3;


console.log("Responde 'yes' si el numero es par. Responde 'no' si es impar");

while (count > 0) {
    const value = randomNumber(1, 99);
    console.log(`Pregunta: ${value}`);

    const answer = readlineSync.question('Respuesta:');

    let verifing = isEvenNumber(value, answer)

    if (verifing === true) {
        count -= 1;
    }

    console.log(check(verifing));
}

console.log(`¡Felicidades has ganado`);