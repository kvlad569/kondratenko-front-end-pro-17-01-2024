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
    constructor(brand, model, year, licensePlate, owner) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.licensePlate = licensePlate;
      // Перевіряємо вік власника перед присвоєнням
      if (owner.age >= 18) {
        this.owner = owner;
      } else {
        console.log("Власник повинен бути старше 18 років!");
      }
    }
  
    displayInfo() {
      console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
      console.log("Власник:");
      this.owner.displayInfo();
    }
  }
  
  const person1 = new Person("Руслан", 25);
  const person2 = new Person("Марія", 40);
  
  const car1 = new Car("Tesla", "CorollaModel S", 2016, "ВС1234АВ", person1);
  const car2 = new Car("Porshe", "Panamera", 2020, "ВС1111ВС", person2);
  
  car1.displayInfo();
  console.log("")
  car2.displayInfo();