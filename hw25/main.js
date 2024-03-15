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

const array = [1, 2, 3, [1.1, 1.2, 1.3], 4];
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = generateList(array);
