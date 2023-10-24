// Creating an Object
var person = {
    name: "Azaan",
    age: 10,
    city: "Karachi"
}
// Adding property "email" to it
person.email = "azaanullahkhan291@gmail.com"
// deleting property city from person object
delete (person.city)
// Checking if object has a propery called email
console.log(person.hasOwnProperty("email"))
console.log(person);
// Q) Create a function called printPersonInfo that takes the person object as an argument and prints a message like "John is 30 years old and lives in New York." where "John" is the name from the person object, "30" is the age, and "New York" is the city. Ensure the function works with or without the city property.

function printPersonalInfo(object) {
    console.log(`${object.name} is ${object.age} years old and lives in ${object.city ? object.city : "his home"}`);
}
printPersonalInfo(person)
// Creating an array of objects
var objArr = [
    {
        name: "Person 1",
        age: 45,
        email: "example1@gmail.com",
        city: "Peshawar"
    },
    {
        name: "Person 12",
        age: 18,
        email: "example2@gmail.com",
        city: "London"
    },
    {
        name: "Person 3",
        age: 12,
        email: "example3@gmail.com"
    }
]
// Applying printPersonalInfo() function to all of the arrays object
for (let i = 0; i < objArr.length; i++) {
    printPersonalInfo(objArr[i])
}
// new object
var car = {
    model: 1998,
    company: "Honda",
    owner: "NaeemUllah Khan"
}
// using for in loop to print both properties and values
for (const property in car) {
    console.log(`${property}:${car[property]}`);
}
// new object (a copy of car object) using spread operator
var copiedCarObj = { ...car }
// changing values of copied array of Objects
copiedCarObj.model = 2023
copiedCarObj.company = "Lambourghini"
copiedCarObj.owner = "NaeemUllah Khan"
console.log(copiedCarObj);