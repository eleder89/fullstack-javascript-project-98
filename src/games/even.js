import readlineSync from 'readline-sync';
import { welcome, closer, randomNumber } from './index.js';

const brainEven = () => {
  const name = welcome();

  console.log("Responde 'yes' si el numero es par. Responde 'no' si es impar");

  const isEvenNumber = (value, answer) => {
    let result;
    if ((value % 2 === 0 && answer === 'yes') || (value % 2 !== 0 && answer === 'no')) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  let count = 3;

  while (count > 0) {
    const value = randomNumber(1, 99);
    console.log(`Pregunta: ${value}`);

    const answer = readlineSync.question('Respuesta:');

    const verifing = isEvenNumber(value, answer);

    const rigthAnswer = value % 2 === 0 ? "'yes'" : "'no'";

    if (closer(answer, verifing, rigthAnswer)) {
      break;
    } else {
      count -= 1;
    }
  }

  if (count === 0) {
    console.log(`¡Felicidades ${name}, has ganado!`);
  }
};

export default brainEven;
