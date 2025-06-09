import readlineSync from 'readline-sync';
import { check, randomNumber } from './index.js';

const brainEven = () => {
  console.log('¡Bienvenido a Brain Games!');

  const name = readlineSync.question('¿Cual es tu nombre?');

  console.log(`¡Hola, ${name}!`);

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

    if (verifing) {
      console.log(check(verifing));
      count -= 1;
    } else {
      const rigthAnswer = value % 2 === 0 ? "'yes'" : "'no'";
      console.log(`'${answer}'${check(verifing)}${rigthAnswer}`);
      console.log(`Intentalo otra vez ${name}`);
      break;
    }
  }

  if (count === 0) {
    console.log(`¡Felicidades ${name}, has ganado!`);
  }
};

export default brainEven;
