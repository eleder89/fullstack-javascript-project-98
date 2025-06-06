const check = (data) => {
  let result = '';
  if (data === true) {
    result = '¡Respuesta correcta!';
  } else {
    result = '¡Respuesta Incorrecta';
  }
  return result;
};

export default check;
