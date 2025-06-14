import readlineSync from 'readline-sync';
import { check, randomNumber } from './index.js';

const brainCalc = () => {
  console.log('¡Bienvenido a Brain Games!');

  const name = readlineSync.question('¿Cual es tu nombre?');

  console.log(`¡Hola, ${name}!`);

  console.log('¿Cual es el resultado de la expresión?');

  let count = 3;

  while (count > 0) {
    const value1 = randomNumber(1, 99);

    const value2 = randomNumber(1, 99);

    let operador;

    switch (randomNumber(1, 3)) {
      case 1:
        operador = '+';
        break;
      case 2:
        operador = '-';
        break;
      case 3:
        operador = '*';
        break;
      default:
        operador = '+';
    }

    const pregunta = `${value1} ${operador} ${value2}`;
    console.log(`Pregunta: ${pregunta}`);

    const answer = readlineSync.question('Respuesta:');

    const verifing = eval(pregunta);

    if (answer == verifing) {
      console.log(check(true));
      count -= 1;
    } else {
      console.log(`'${answer}'${check(false)}'${verifing}'`);
      break;
    }
  }
  if (count === 0) {
    console.log(`¡Felicidades ${name}, has ganado!`);
  }
};

export default brainCalc;
