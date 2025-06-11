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

    b = r;

    result = b;
  } while (r === 0);

  return result;
};

export { check, randomNumber, euclidian };
