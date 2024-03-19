function displayData() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById("city").options[document.getElementById("city").selectedIndex].text;
    const address = document.getElementById("address").value;
    
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
            <tr><th>Поле</th><th>Значение</th></tr>
            <tr><td>Ім'я</td><td>${firstName}</td></tr>
            <tr><td>Прізвище</td><td>${lastName}</td></tr>
            <tr><td>Дата народження</td><td>${dob}</td></tr>
            <tr><td>Стать</td><td>${gender === 'male' ? 'Чоловіча' : 'Жіноча'}</td></tr>
            <tr><td>Місто</td><td>${city}</td></tr>
            <tr><td>Адреса</td><td>${address}</td></tr>
            <tr><td>Мови, якими володієте</td><td>${languagesArray.join(', ')}</td></tr>
        </table>
    `;

    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("registrationTitle").style.display = "none";
    document.getElementById("dataDisplay").innerHTML = table;
}
