for (let i = 20; i <= 30; i+= 0.5) {
 console. log (i);
}

const rate = 27;
for (let dollars =10; dollars <= 100; dollars += 10) {
    const newRate = dollars * rate;
    console.log (`${dollars} = ${newRate}`)
}

const n = prompt ("Введіть ціле число:");
let nNum = +n;
for (let  a = 1; a <= 100; a++) {
    const square = a * a;
    if (square <= nNum) {
        console.log(a);
    } else {
        break;
    }
}


let isPrime = true;
if (nNum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(nNum); i++) {
        if (nNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${nNum} - просте число`);
} else {
    console.log(`${nNum} - не є простим числом`);
}



function can(nNum) {
    if (nNum <= 0) {
        return false;
    }
    // Перебираю все возможные степени числа 3, начиная с 0
    let power = 1;
    while (power < nNum) {
        power *= 3; // Увеличиваем степень числа 3
    }
    return power === nNum;
}
const result = can(nNum);
if (result) {
    console.log(`${nNum} можна одержати це число шляхом зведення числа 3 у деякий ступінь.`);
} else {
    console.log(`${nNum} не можна одержати це число шляхом зведення числа 3 у деякий ступінь.`);
}