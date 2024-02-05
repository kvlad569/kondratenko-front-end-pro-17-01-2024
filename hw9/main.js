const n = prompt("Введіть число:");
const d = prompt("Введіть ступінь:");

const num = +n;
const degree = +d;

function power(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree < 0) {
        return 1 / power(num, -degree);
    } else {
        return num * power(num, degree - 1);
    }
}
    let result = power(num, degree);
    console.log(`${num} в ступені ${degree} = ${result}`);

