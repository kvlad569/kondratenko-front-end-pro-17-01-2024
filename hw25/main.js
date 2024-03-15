function generateList(array) {
    let html = '';
    array.forEach(item => {
        if (Array.isArray(item)) {
            html += '<ul>' + generateList(item) + '</ul>';
        } else {
            html += '<li>' + item + '</li>';
        }
    });
    return html;
}

const array = [1, 2, [1.1, 1.2, 1.3], 3, 4, [2.1, 2.2, 2.3], 5, [3.1, 3.2, 3.3], 6];
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = generateList(array);