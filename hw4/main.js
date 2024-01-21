const userAction = prompt("Введіть один з вариантів дії: add, sub, mult, div");
const userNumber1 = prompt("Введіть перше число:");
const userNumber2 = prompt("Введіть друге число:");

const number1 = +userNumber1;
const number2 = +userNumber2;

if(userAction == 'add') {
resalt = number1 + number2
} else if(userAction == 'sub') {
resalt = number1 - number2
} else if(userAction == 'mult') {
resalt= number1 * number2
} else if(userAction == 'div') {
resalt= number1 / number2
}

alert (`${number1} ${userAction} ${number2} = ${resalt}`);