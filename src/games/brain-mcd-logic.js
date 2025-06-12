import readlineSync from 'readline-sync';
import { randomNumber, check, euclidian } from './index.js';

const calcMcd = () => {
  console.log('¡Bienvenido a Brain Games!');

  const name = readlineSync.question('¿Cual es tu nombre?');

  console.log(`¡Hola, ${name}!`);

  console.log('Calcula el máximo común divisor de los numeros dados.');

  let count = 3;

  while (count > 0) {
    const value1 = randomNumber(1, 99);

    const value2 = randomNumber(1, 99);

    console.log(`Pregunta: ${value1}, ${value2}`);

    const answer = readlineSync.question('Respuesta: ');

    const rigthAnswer = euclidian(value1, value2);

    const verifing = rigthAnswer == answer;

    if (verifing) {
      console.log(check(verifing));
      count -= 1;
    } else {
      console.log(`${answer}${check(verifing)}${rigthAnswer}`);
      console.log(`Imntentalo otra vez ${name}`);
      break;
    }
  }

  if (count === 0) {
    console.log(`¡Felicidades ${name} has ganado!`);
  }
};

export default calcMcd;
