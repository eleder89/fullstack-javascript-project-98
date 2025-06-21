import readlineSync from 'readline-sync';
import {
  randomNumber, welcome, closer, euclidian,
} from './index.js';

const calcMcd = () => {
  const name = welcome();

  console.log('Encuentra el máximo común divisor de los números dados.');

  let count = 3;

  while (count > 0) {
    const value1 = randomNumber(1, 99);

    const value2 = randomNumber(1, 99);

    console.log(`Pregunta: ${value1}, ${value2}`);

    const answer = readlineSync.question('Respuesta: ');

    const rigthAnswer = euclidian(value1, value2);

    const verifing = rigthAnswer == answer;

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

export default calcMcd;
