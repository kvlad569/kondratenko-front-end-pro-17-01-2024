function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 2);
    }
}

const array = [10, 20, 30, 40, 50, 60, 70];
removeElement(array, 30);
console.log(array);  
// [10, 20, 50, 60, 70] извлекли 30 и 40 так как индекс 2 