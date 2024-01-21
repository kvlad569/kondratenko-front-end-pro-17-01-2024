const numbPrompt1 = prompt ('Введіть перше число');
const numbPrompt2 = prompt ('Введіть друге число');

const number1 = +numbPrompt1;
const number2 = +numbPrompt2;

const sum = number1 + number2;
const difference = number1 - number2;
const multiplication = number1 * number2;
const c = number1 / number2;

alert (`${number1} + ${number2} = ${sum}
${number1} - ${number2} = ${difference}
${number1} * ${number2} = ${multiplication}
${number1} / ${number2} = ${c}`);
