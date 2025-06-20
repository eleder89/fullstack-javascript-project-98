import readlineSync from 'readline-sync';
import { randomNumber, welcome, closer } from './index.js';

const brainPrime = () => {
  const name = welcome();
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  let count = 3;

  const isPrimeNumber = (value) => {
    let result;
    const k = Math.floor(Math.sqrt(value));
    for (let i = 2; i <= k; i += 1) {
      if (value % i !== 0) {
        result = true;
      } else {
        return false;
      }
    }
    return result;
  };

  while (count > 0) {
    const value = randomNumber(5, 99);
    console.log(`Pregunta: ${value}`);

    const answer = readlineSync.question('Tu respuesta: ');

    const primeOrNot = isPrimeNumber(value);

    const rigthAnswer = primeOrNot ? 'yes' : 'no';

    const verifing = rigthAnswer.toString() === answer;

    if (closer(answer, verifing, rigthAnswer, name)) {
      break;
    } else {
      count -= 1;
    }
  }
  if (count === 0) {
    console.log(`¡Felicidades, ${name}!`);
  }
};

export default brainPrime;
