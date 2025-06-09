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

export { check, randomNumber };
