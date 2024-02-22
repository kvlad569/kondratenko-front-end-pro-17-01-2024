class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
            console.log(`${this.firstName} ${this.lastName} був присутній на занятті.`);
        } else {
            console.log("Масив відвідуваності вже заповнений");
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
            console.log(`${this.firstName} ${this.lastName} був відсутній на занятті.`);
        } else {
            console.log("Масив відвідуваності вже заповнений");
        }
    }

    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
        return sum / this.grades.length;
    }

    calculateAttendancePercentage() {
        if (this.attendance.length === 0) {
            return 0;
        }
        const presentCount = this.attendance.filter(value => value === true).length;
        return presentCount / this.attendance.length;
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendancePercentage = this.calculateAttendancePercentage();
        let message = "";

        if (averageGrade > 90 && attendancePercentage > 0.9) {
            message = "Молодець!";
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            message = "Добре, але можна краще";
        } else {
            message = "Редиска!";
        }

        console.log(`${this.firstName} ${this.lastName}: Середній бал: ${averageGrade.toFixed(2)}, Відвідуваність: ${(attendancePercentage * 100).toFixed(2)}%`);
        return message;
    }
}

const student1 = new Student("Руслан", "Петров", 1999);
const student2 = new Student("Марія", "Іванова", 2000);
const student3 = new Student("Олег", "Сидоров", 1998);

student1.grades = [95, 85, 90];
student2.grades = [92, 88, 94];
student3.grades = [80, 85, 75];

student1.present();
student1.absent();
student2.present();
student3.present();
student3.present();
console.log("")

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());

console.log(student1.attendance); // Проверка значений массива attendanc