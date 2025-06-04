const isEvenNumber = (value, answer) => {
    if (value %2 === 0 && answer === 'yes' || value %2 !== 0 && answer === 'no') {
        return true;
    } else {
        return false
    }
};

export default isEvenNumber;