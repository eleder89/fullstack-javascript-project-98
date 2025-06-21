import readlineSync from 'readline-sync';
import { randomNumber, closer, welcome } from './index.js';

const guesTheNumber = () => {
  const name = welcome();

  console.log('¿Qué numero falta en la progresión?');

  let count = 3;

  while (count > 0) {
    const values = () => {
      const inicio = randomNumber(2, 80);
      const secuencia = randomNumber(2, 9);
      const result = [];
      for (let i = 0; i < 10; i += 1) {
        result.push(inicio + i * secuencia);
      }
      return result;
    };

    const numbers = values();

    const hideIndex = randomNumber(1, 7);

    const hideNumber = numbers[hideIndex];

    numbers[hideIndex] = '..';

    const string = numbers.toString();

    const progression = string.replace(/,/g, ' ');

    console.log(`Pregunta: ${progression}`);

    const answer = readlineSync.question('Tu respuesta: ');

    const verifing = hideNumber == answer;

    if (closer(answer, verifing, hideNumber, name)) {
      break;
    } else {
      count -= 1;
    }
  }
  if (count === 0) {
    console.log(`Felicidades ${name}!`);
  }
};

export default guesTheNumber;
