import readlineSync from 'readline-sync';
import { randomNumber, check } from './index.js';

const brainPrime = () => {
  console.log('¡Bienvenido a Brain Games!');

  const name = readlineSync.question('¿Cual es tu nombre?');

  console.log(`¡Hola, ${name}!`);

  console.log('¡Responde "yes" si el numero presentado es primo, de lo contrario responde "no"');

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

    const answer = readlineSync.question('Respuesta: ');

    const primeOrNot = isPrimeNumber(value);

    const rightAnswer = primeOrNot ? 'yes' : 'no';

    const verifing = rightAnswer == answer;

    if (verifing) {
      console.log(check(verifing));
      count -= 1;
    } else {
      console.log(`${answer}${check(verifing)}${rightAnswer}`)
      console.log(`¡Intentalo otra vez ${name}`);
      break;
    }
  }
  if (count === 0) {
    console.log(`¡Felicidades ${name}, has ganado!`);
  }
};

export default brainPrime;
