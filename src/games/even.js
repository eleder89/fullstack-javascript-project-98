const isEvenNumber = (value, answer) => {
  let result;
  if ((value % 2 === 0 && answer === 'yes') || (value % 2 !== 0 && answer === 'no')) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

export default isEvenNumber;
