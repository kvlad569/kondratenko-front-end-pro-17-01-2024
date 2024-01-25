const userAge = prompt("Введіть рік народження:");
if (userAge === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    const userCity = prompt("Введіть місто, де ви живете:");
    if (userCity === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
    } else {
        const favoriteSport = prompt("Введіть свій улюблений вид спорту:");
        if (favoriteSport === null) {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        } else {
            const resaltAge = 2024 - +userAge;
            let message = `Ти живешь у місті: ${userCity}.`;
            if (userCity === "Київ") {
                message = "Ти живеш у столиці України.";
            } else if (userCity === "Вашингтон") {
                message = "Ти живеш у столиці США.";
            } else if (userCity === "Лондон") {
                message = "Ти живеш у столиці Великої Британії.";
            }
            let resaltSport = `Введіть улюбленний вид спорту (Футбол, Теніс чи Бокс) ${favoriteSport}.`;
            if (favoriteSport === "Футбол") {
                resaltSport = "Круто! Хочеш стати як Андрій Шевченко.";
            } else if (favoriteSport === "Теніс") {
                resaltSport = "Круто! Хочеш стати як Роджер Федерер.";
            } else if (favoriteSport === "Бокс") {
                resaltSport = "Круто! Хочеш стати як Александр Усик.";
            }
            alert(`Ваш вік: ${resaltAge}\n${message}\n${resaltSport}`);
        }
    }
}