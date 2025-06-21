import readlineSync from 'readline-sync';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const check = (data) => {
  let result = '';
  if (data === true) {
    result = '¡Correcto!';
  } else {
    result = ' es una Respuesta Incorrecta ;(. La respuesta correcta era ';
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

const name = () => readlineSync.question('¿Cuál es tu nombre?');

const welcome = () => {
  console.log('¡Bienvenido a Brain Games!');

  const nombre = name();

  console.log(`¡Hola, ${nombre}!`);

  return nombre;
};

function closer(answer, verifing, rigthAnswer, name1) {
  if (verifing) {
    console.log(check(verifing));
  } else {
    console.log(`${answer}${check(verifing)}${rigthAnswer}.\n ¡Intentémoslo de nuevo, ${name1}!`);
    return true;
  }
  return false;
}

const operation = (operador, value1, value2) => {
  let result;

  if (operador === '+') {
    result = value1 + value2;
  } else if (operador === '-') {
    result = value1 - value2;
  } else if (operador === '*') {
    result = value1 * value2
  }

  return result;
};

export {
  check, randomNumber, euclidian, closer, welcome, operation,
};
