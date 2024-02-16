class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
  }

  setOwner(owner) {
    if (owner instanceof Person) {
      if (owner.age >= 18) {
        this.owner = owner;
        console.log(`Власник "${owner.name}" успішно доданий.`);
      } else {
        console.log("Власник повинен бути старше 18 років!");
      }
    } else {
      console.log("Некоректний об'єкт власника.");
    }
  }

  displayInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
    if (this.owner) {
      console.log("Власник:");
      this.owner.displayInfo();
    } else {
      console.log("Власник не вказаний.");
    }
  }
}

const person1 = new Person("Руслан", 25);
const person2 = new Person("Марія", 40);

const car1 = new Car("Tesla", "Model S", 2016, "ВС1234АВ");
const car2 = new Car("Porshe", "Panamera", 2020, "ВС1111ВС");

car1.setOwner(person1);
car2.setOwner(person2);

car1.displayInfo();
console.log("");
car2.displayInfo();