function displayData() {
    const form = document.getElementById("registrationForm");
    const dataDisplay = document.getElementById("dataDisplay");
    const registrationTitle = document.getElementById("registrationTitle");

    let table = "<h2>Дані, введені користувачем:</h2>";
    table += "<table border='1'>";
    table += "<tr><th>Поле</th><th>Значення</th></tr>";
    
    for (let i = 0; i < form.elements.length; i++) {
        const field = form.elements[i];
        if (field.type === "checkbox" || field.type === "radio") {
            if (field.checked) {
                let fieldName = "";
                let fieldValue = "";
                if (field.name === "gender") {
                    fieldName = "Стать";
                    fieldValue = field.value === "male" ? "Чоловіча" : "Жіноча";
                } else {
                    fieldName = field.labels[0].innerText;
                    fieldValue = field.value;
                }
                table += "<tr><td>" + fieldName + "</td><td>" + fieldValue + "</td></tr>";
            }
        } else {
            if (field.value.trim() !== "") {
                table += "<tr><td>" + field.labels[0].innerText + "</td><td>" + field.value + "</td></tr>";
            }
        }
    }
    
    table += "</table>";
    dataDisplay.innerHTML = table;
    registrationTitle.style.display = "none"; 
    form.style.display = "none"; 
}
