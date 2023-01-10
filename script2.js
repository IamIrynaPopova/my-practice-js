console.log("Hello world!");
// ------Module5 ---task 2-------------

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//         return this.discount;
//   },
//   setDiscount(value) {
//         this.discount = value;
//       },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ------Module5 ---task 3-------------
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//    console.log(this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - "));
//   },
//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     console.log(emails);
//     const uniqueEmails = new Set(emails);
//     console.log(uniqueEmails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//      console.log(this.orders.filter((order) => order.email === email));
//   },
//   // Change code above this line
// };
// historyService.getOrdersLog();
// historyService.getEmails();
// historyService.getOrdersByEmail("solomon@topmail.net");

// ------Module5 ---task 5-------------
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// console.log(parent);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;
// parent.array = [];

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line
// console.log(ancestor.hasOwnProperty("array"));

// ------Module5 ---task 7 class-------------
// class Car {
// constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const obj = new Car({ brand: "Audi", model:"Q3",price: 36000});
// console.log(obj);

// ------Module5 ---task 10 class-------------
// class Storage {
//   constructor(items) {
//     this.items = [...items];
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//    return this.items.push(item);
//   }
//   removeItem(item) {
//     const indexItem = this.items.indexOf(item);
//     return this.items.splice(indexItem,1);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ------Module5 ---task 10 class-------------
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(startValue) {
//     this.value = startValue + this.value;
//   }
//   padEnd(endValue) {
//     this.value = this.value + endValue;
//   }
//   padBoth(bothValue) {
//     this.value = bothValue + this.value + bothValue;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ------Module5 ---task 11 приватний(#)-------------

// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
// return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// const newCar = new Car({brand: "audi", model:"A", price:1000});
// // console.log(newCar);
// newCar.getBrand();
// newCar.changeBrand("Mazda");
// newCar.getBrand();
// newCar.model = "M";
// // console.log(newCar);
// console.log(Car.prototype);
// Car.prototype.hi=function(){
//   console.log(this);
// }
// // console.log(Car.prototype);
// console.log(newCar);
// console.log(Car.prototype);
// newCar.hi();

// ------Module5 ---task 15 гетери,сетери-------------
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand (newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const carNew = new Car({brand:"Honda", model:"A",price: 1000});
// console.log(carNew);
// carNew.brand = "BMW"
// console.log(carNew);

// ------Module5 ---task 16 статичні методи-------------
// class Car {
//   // Change code below this line

//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }
// set price(newPrice) {

// newPrice < Car.MAX_PRICE ? (this.#price = newPrice) : this.#price;

//   }

// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// // console.log(audi);
// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// // console.log(Car.MAX_PRICE);

// ------Module5 ---task 16 приватні  статичні методи-------------
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     return  price < Car.#MAX_PRICE? "Success! Price is within acceptable limits":
//                  "Error! Price exceeds the maximum"
//               }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price));
//  // "Error! Price exceeds the maximum"

// ------Module5 ---task 18 -----------

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {

//   static AccessLevel = {
//           BASIC: "basic",
//         SUPERUSER: "superuser",
//   }
// }

// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

// ------Module5 ---task 19 -----------
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({email, accessLevel}) {
//           super(email);
//         this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ------Module5 ---task 20 -----------
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//         blacklistedEmails = [];
//         blacklist(email) {
//          this.blacklistedEmails.push(email);
//         }
//         isBlacklisted(email) {

//                return this.blacklistedEmails.some(item => item === email);
//         }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const findType = 1.1;
// console.log('это тип', typeof findType);
// const welcome =
//   'Сережа,я тебя люблю 💗';
// alert(welcome);
// const has18Age = confirm('Have you eighteen age?');
// console.log(has18Age);

// const findNumber = Number("34");
// console.log(Number.parseFloat(findNumber));
// console.log(Number.parseFloat("5px"));
// console.log(Number.isNaN(findNumber));
// console.log((0.12+0.11).toFixed(3));
// console.log(Math.random() * (10 - 1) + 1);
// console.log(typeof ('ddff' + 3));
// const hasLetters = 'Welcome to my house'
// console.log(hasLetters.endsWith('house'));

// const string = ['iryna', 'vanya'];

// let newString = [];
// string.forEach((name) => {
//   const lastWord = `${name[name.length - 1].toUpperCase()}`;
// const newString = `${name.slice(0, name.length - 1)}${lastWord}`;
//   // console.log(lastWord);
//   console.log(newString);

// });
// console.log(string);
// console.log(userName);
// const userName = 'Serega';
// let password;
// const userName = prompt("Enter password");
// switch (userName) {
// case "ira":
// console.log(password = userName);
// break;
// case "serega":
// console.log(password = userName);
// break;
//         default:
// console.log("Error");
// }

// let password = "";

// let array = ["Ваня", "Иштван", ];
// array.push("Оля");
// console.log(array);
// const findName = array.indexOf("Иштван");
// console.log(findName);
// const newArray = array.splice(findName, 1, "Петя");
// console.log(array);
// const firstElement = array.shift();
// console.log(firstElement);
// console.log(array);
// const addElement = array.unshift("Маша","Паша");
// console.log(array);
// const stringMy = "Привет я массив"
// console.log(stringMy.split(" "));

// const changeCase = function (string) {
//         let letersString = string.split("");
//         let newLetersString = ' ';
//         console.log(letersString);

//         for (leter of letersString) {
//                 leter === leter.toUpperCase()
//                 ? newLetersString += leter.toLowerCase()
//                 : newLetersString += leter.toUpperCase();
//                 }

//         return newLetersString;
// };
// const result = changeCase('SeReGa');
// console.log(result);

// ----------------------------------------------------------
// const string = 'Я люблю и понимаю JS';
// const changeStringOnSlug = function (obj) {
//        console.log(arguments);
//         const createArray = obj.toLowerCase().split(" ");
//         const slug = createArray.join("-")
//         return slug;
// }

// const result = changeStringOnSlug(string);
// console.log(result);

// ----------------------------------------------------------
// const data = [1, 6, 9, 3, 0, 5, 4];

// const findNumber = function (array, ...numbers) {
//         let newArray = [];
//       console.log(numbers);
//         for (const number of numbers) {

//                 if (array.includes(number)) {
//                 newArray.push(number);
//                 }
//                    }
//         return newArray;
// };
// const result = findNumber(data, 1, 2, 3, 4, 5);
// console.log(result);

// ----------------------------------------------------------
// const calcSum = function (a, b) {
//         if (b === 1) {
//                 // console.log(a);
//                 return a;
//         } else {

//                 return a * calcSum(a, b - 1);
//         }
// }
// const result = calcSum(2, 3);
// console.log(result);

// ----------------------------------------------------------

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];




// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

// const addScore = students.map(student => {
//         console.log(student);
//         return {
//           ...student,
//           score: student.score+2,
//         };
// });
// console.table(addScore);

// ----------------------------------------------------------
// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const uniqueCourses = allCourses.filter((course, index, array) =>
//         array.indexOf(course) === index);
//         console.log(uniqueCourses);

// ----------------------------------------------------------

// const array = [1, 5.2, 4, 0, -1];

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// const result = sum(array);
// console.log(result);

// ----------------------------------------------------------

// const areaOrPerimeter = function (l, w) {
//         return l === w ? l * w : (l + w) * 2;

// };
// const result = areaOrPerimeter(2,3);
// console.log(result);

// ----------------------------------------------------------
// var countSheep = function (...num) {
//         console.log(num);
//         return num.map(number => `${number} sheep...`).join("");
// };
// const result = countSheep(1,2,3);
// console.log(result);

// ----------------------------------------------------------
// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2
// const array = [1, 2, 3, 4, 5];
// function each(arr, callback) {
//         const resultArray = [];
//         arr.forEach(el => {
//                 resultArray.push(callback(el));
//         });
//         return resultArray;
// }

// function multyplay(number) {
//         return number * 2;
// }
// const res = each(array, multyplay);
// console.log(res);

//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.
// function madeDiscont(discont) {
//         return function calcDiscont(sum) {
//                 return sum - sum * (discont / 100);
//          }
// }

// const premium = madeDiscont(50);
// const seasonSale = madeDiscont(30);
// const userSale = madeDiscont(10);
// console.log(premium(1000));
// console.log(seasonSale(1000));
// console.log(userSale(1000));

// ----------------------------------------------------------
//Створіть об'єкт calculator із такими методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() ділить збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   readPromt() {
//     const result = prompt("Enter number,operator,number");
//     console.log(result);
//     console.log(this.parseString(result));
//   },
//   parseString(originalString) {
//     const [firstOperand, operator, secondOperand] = originalString
//       .replaceAll(" ", "")
//       .split(/(\D)/);

//     return {
//       firstOperand,
//       secondOperand,
//       operator,
//     };
//   },

//   sum() {
//     return this.a + this.b;
//   },
//   min() {
//     return this.a - this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
//   div() {
//     return this.a / this.b;
//   },
// };
// console.log(calculator.read(2, 3));
// console.log(calculator.sum());
// console.log(calculator.min());
// console.log(calculator.mult());
// console.log(calculator.div());
// console.log(calculator.readPromt());
