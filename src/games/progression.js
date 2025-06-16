import readlineSync from 'readline-sync';
import { randomNumber, check } from './index.js';

const guesTheNumber = () => {
  console.log('¡Bienvenido a Brain Games!');

  const name = readlineSync.question('¿Cual es tu nombre?');

  console.log(`¡Hola, ${name}!`);

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

    const answer = readlineSync.question('Respuesta: ');

    const verifing = hideNumber == answer;

    if (verifing) {
      console.log(check(verifing));
      count -= 1;
    } else {
      console.log(`${answer}${check(verifing)}${hideNumber}`);
      console.log(`¡Intentalo otra vez ${name}`);
      break;
    }
  }

  if (count === 0) {
    console.log(`¡Felicidades ${name} has ganado!`);
  }
};

export default guesTheNumber;
