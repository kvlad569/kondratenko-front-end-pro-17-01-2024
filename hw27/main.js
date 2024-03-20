function displayData() {
    const fields = document.querySelectorAll('[data-field]');
    let data = {};

    fields.forEach(field => {
        const fieldName = field.dataset.field;
        data[fieldName] = field.value;
    });

    if (!Object.values(data).some(value => value !== '')) {
        alert("Ви не ввели дані у реєстраційну форму. Будь ласка, заповніть хоча б одне поле.");
        return;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    const languages = document.querySelectorAll('input[name="languages"]:checked');
    const languagesArray = Array.from(languages).map(language => {
        switch (language.value) {
            case 'ukrainian':
                return 'Українська';
            case 'russian':
                return 'Російська';
            case 'english':
                return 'Англійська';
            default:
                return '';
        }
    });

    const table = `
        <table border='1'>
            <tr><th>Поле</th><th>Значення</th></tr>
            ${Object.entries(data).map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`).join('')}
            <tr><td>Стать</td><td>${gender ? (gender.value === 'male' ? 'Чоловіча' : 'Жіноча') : ''}</td></tr>
            <tr><td>Мови, якими володієте</td><td>${languagesArray.join(', ')}</td></tr>
        </table>
    `;

    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("dataDisplay").innerHTML = table;
}
