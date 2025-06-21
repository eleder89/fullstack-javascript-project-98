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
    console.log(`${answer}${check(verifing)}${rigthAnswer}.\n ¡Intentemoslo de nuevo, ${name1}!`);
    return true;
  }
  return false;
}

export {
  check, randomNumber, euclidian, closer, welcome,
};
