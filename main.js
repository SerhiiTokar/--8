class Person {
    constructor(name, age, occupation, nationality) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.nationality = nationality;
    }

    // Метод для виведення інформації про особу
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}, Nationality: ${this.nationality}`;
    }
}

const person1 = new Person("Давід Сірий", 21, "Механік", "Чех");
const person2 = new Person("Олег Білий", 45, "Бізнесмен", "Амереканець");
const person3 = new Person("Ольга Мартинова", 24, "Програміст", "Українка");

document.getElementById('box1').textContent = person1.displayInfo();
document.getElementById('box2').textContent = person2.displayInfo();
document.getElementById('box3').textContent = person3.displayInfo();