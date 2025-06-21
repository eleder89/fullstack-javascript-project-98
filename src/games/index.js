import readlineSync from 'readline-sync';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const check = (data) => {
  let result = '';
  if (data === true) {
    result = '¡Respuesta correcta!';
  } else {
    result = ' es una Respuesta Incorrecta, la respuesta correcta es ';
  }
  return result;
};

const euclidian = (value1, value2) => {
  let a = value1;

  let b = value2;

  let r = 0;

  let result = 0;

  do {
    r = a % b;

    a = b;

    result = b;

    b = r;
  } while (r !== 0);

  return result;
};

const welcome = () => {
  console.log('¡Bienvenido a Brain Games!');

  const name = readlineSync.question('¿Cuál es tu nombre?');

  console.log(`¡Hola, ${name}!`);

  return name;
};

const closer = (answer, verifing, rigthAnswer) => {
  if (verifing) {
    console.log(check(verifing));
  } else {
    console.log(`${answer}${check(verifing)}${rigthAnswer}\n ¡Intentalo otra vez!`);
    return true;
  }
  return false;
};

export {
  check, randomNumber, euclidian, closer, welcome,
};
