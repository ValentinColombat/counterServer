const isValidNumber = (number) => !isNaN(number) && number >= 0;

const getParityMessage = (number) => `${number} est un nombre ${number%2 === 0 ? 'pair' : 'impair'}`;

export { isValidNumber, getParityMessage };