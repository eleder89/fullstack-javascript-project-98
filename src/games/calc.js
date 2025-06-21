import readlineSync from 'readline-sync';
import { welcome, closer, randomNumber } from './index.js';

const brainCalc = () => {
  const name = welcome();

  console.log('¿Cuál es el resultado de la expresión?');

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

    const answer = readlineSync.question('Tu respuesta:');

    const rigthAnswer = eval(pregunta);

    const verifing = answer == rigthAnswer;

    if (closer(answer, verifing, rigthAnswer, name)) {
      break;
    } else {
      count -= 1;
    }
  }
  if (count === 0) {
    console.log(`¡Felicidades ${name}!`);
  }
};

export default brainCalc;
