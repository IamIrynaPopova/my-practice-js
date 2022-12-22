// console.log("Hello world!");

// ----------------------Day 1--------------------

//  Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

//---------------- variant 1---------
// weight = Number(weight.replace(",", "."));
// height = Number(height);

// console.log(weight);
// console.log(height);

// const bmi = +(weight/Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // 28.8

// -----------------variant 2----------
// const commaindex = weight.indexOf(",");
// console.log(commaindex);
// const aftercomma = weight.slice(commaindex + 1);
// console.log(aftercomma);
// const beforecomma = parseInt(weight);
// console.log(beforecomma);
// weight = +`${ beforecomma }.${ aftercomma }`;
// console.log(weight);

// ----------------------Unicode-------------------
// метод проверки unicode
// console.log("a".charCodeAt());

//  ----------------- Метод slice------------------
// Метод строк slice(startIndex, endIndex) используется для создания
//  копии части или всей строки.Он делает копию элементов строки
// от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.

// const name = "Iryna";
// // console.log(name.slice(1,3)); //ry

//  ----------------- Function------------------
// function iryna() {
//   console.log("Hello, this is my first function!");
// }

// iryna();

// function add(a,b,c) {
//     console.log(`"Addition result equals ${a + b + c}"`);
//  }
// add(1, 1, 1);

// ----------------------Day 2--------------------
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//         let message;
//         // Change code below this line
//         totalPrice = pricePerDroid * orderedQuantity;
//         if (totalPrice > customerCredits) {
//                 message = `Insufficient funds!`;
//                 console.log(message);
//         }
//         else {
//                 cash = customerCredits - totalPrice;
//                 message = `You ordered ${orderedQuantity} droids, you have ${cash} credits left`;
//                 console.log(message);
//         }

//         // Change code above this line
//         return message;
// }
// makeTransaction(1000, 3, 15000);

// ???????
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   console.log(isInRange);
//   return isInRange;

// }

// isNumberInRange(10, 30, 17);

// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length > maxLength) {
//     result = message.slice(message, maxLength) + "...";
//      console.log(result);
//   } else {
//     result = message;
//       console.log(result);????
//   }
//     return result;
// }
// ----------Есть ли имя в полном имени--------
// formatMessage("Curabitur ligula sapien", 16);

// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   console.log(result);
//   return result;
//   }
// checkForName("Egor Kolbasov", "Egor");

// ----------Проверка на спам--------
// function checkForSpam(message) {
//   let result;
//   result =
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale");
//   console.log(result);
//   return result;
// }

// checkForSpam("Amazing SalE, SALEspam only tonight!");

// ----------Цикл For--------
// const clients = ["cat", "dog", "fish"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// ----------For of--------
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// ----------For of if--------

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "ira";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

// }

// console.log(message);

// ----------For of if  continue--------

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// ----------Методы split() и join()--------
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"

// ----------Module2 task 11--------

// function calculateEngravingPrice(message, pricePerWord) {
// let addArray = message.split(" ")
//         console.log(addArray);
//         let amountWords = addArray.length;
//         console.log(amountWords);
//         return price = amountWords * pricePerWord;
//    }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// console.log(price);

// ----------Module2 task 12--------
// function makeStringFromArray(array, delimiter) {
//   let string;
//         string = array.join(delimiter);
//         console.log(string);
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");

// ----------Module2 task 13 ---Метод slug--------

// function slugify(title) {

//         // var 1----
//         // const normalizedInput = title.toLowerCase();
//         // const slug = normalizedInput.replaceAll(" ", "-");
//         // console.log(slug);
//         // return slug;

//         // return slug = title.toLowerCase().replaceAll(" ", "-");

// //        var 2-----
//           const normalizedInput = title.toLowerCase();
//           const addArray = normalizedInput.split(" ");
//           return slug = addArray.join("-");

// }
// slugify("Arrays for begginers");
//  console.log(slug);
// slugify("How to become a JUNIOR developer in TWO WEEKS");
//     console.log(slug);

// ----------Module2 task 14 ---Метод slice--------

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(2, 5);
// console.log(lastThreeEls);

// --------------------------------------------------

// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера

// Якщо користувач вводить "Admin",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"

//Пароль перевіряти так:
// Якщо введено пароль "I am admin",
// то вивести рядок "Hello!"
// інакше виводити рядок "Wrong password!"
// const login = prompt(`enter login: `);
// console.log(login);
// const pass = '';
// if (login === 'Admin') {
//         const pass = prompt('enter pass:');
//         else if (login === '' || login === null) {
//                 console.log('cancel');
//         }
//         else {
//                 console.log("I don't know you");
//         }
// }

// Напишіть функцію min(a,b),
// яка повертає найменше з чисел a та b.

// Приклад викликів:
//
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// var 1
// function min(a, b) {
//         if (a > b) {
//                 return b;
//         }
//         else {
//                 return a;
//         }
// }
// console.log(min(3, 4));
// console.log(min(5, 4));

// var 2
// const shirtMin = (a, b) => a > b ? b : a;
// console.log(shirtMin(3, 4));
// console.log(shirtMin(5, 4));

// --------------------------------
// const minutes = 35;

// У змінній minutes лежить число
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const minutes = 25;
// if (0 >= minutes && minutes < 15) {
//         console.log("1 guarter");
// } else if (15 >= minutes && minutes < 30) {
//         console.log("2 guarter");
// } else if (30 >= minutes && minutes < 45) {
//         console.log("3 guarter");
// }
// else if (45 >= minutes && minutes < 60) {
//         console.log("4 guarter");
// }
// else console.log("Not in range!");

// --------------------------------------------------
// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// let language = prompt("Введіть мову: ");
// swift(language?.toLowerCase()){
//         case "php":
//         console.log("PHP Расмус Лердорф");
//         break;
// case "C#":
//         console.log("група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота");
//         break;
// case "Swift":
//         console.log("Кріс Латтнер");
//         break;

//         case "JS":
//         console.log("Брендан Ейх");
//         break;
// case "Java":
//         console.log("Джеймс Гослінг");
//         break;
//         case "Python":
//         console.log("Гвідо ван Россум");
//         break;
//         default :console.log("You enter another language!");

//          }

// --------------
//Напишіть цикл, який виводить у консоль
//1. числа від max до min за спаданням
//2. Виведіть у консоль усіх парні числа від min до max
//3. За допомогою циклу for додайте всі парні числа від min до max
// const max = 90;
// const min = 33;
// // for (let i = max; i > min; i -= 1)
// //         console.log(i);
// let total = 0;
// for (let i = min; i < max; i += 1){
//         // console.log(i%5);
//         if (i % 2 === 0) {
//                 // console.log(i);
//                 total += i;
//         }

// }
// console.log(total);

// // Потрібно вивести двовимірний масив
// const arr = [[1, 2], [3, 4],[5, 6]];
// //
// // printArray(arr) //1 2 3 4 5 6

// console.log(arr);

// for (let i = 0; i < arr.length; i += 1){
//         for (let j = 0; j < arr[i].length; j += 1){
//                 console.log(arr[i][j]);
//         }
// }

// За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const month = 12;
// const salary = 1000;
// let pureSalary = 0;
// let taxes = 0;

// for (let i = 0; i < month; i +=1 ){
//         pureSalary += salary * 0.95;
//         taxes += salary * 0.05;

// }
// console.log("pure salary ", pureSalary);
// console.log("taxes ", taxes);

// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Після введення число додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.

// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."

// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.

// ----------Module2 task 15 ---Метод concat--------
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// ----------Module2 task 16 Метод concat and slice -----------
// var 1-------

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     newArray.length = maxLength;
//   }
//   console.log(newArray);
//   return newArray;
// }
// makeArray([1, 2, 3, 4], [8, 9], 4);
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"],3);

// var 2-------

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//      newArray = newArray.slice(0, maxLength);
//     }
//   console.log(newArray);
//     return newArray;
// }
// makeArray([1, 2, 3, 4], [8, 9], 4);
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"],6);

// ----------Module2 task 17 Цикл for -----------

// const start = 3;
// const end = 7;

// for (let i = start; i <=end ; i += 1 ) {
//   console.log(i);
// }

// ----------Module2 task 18 Цикл for -----------
// function calculateTotal(number) {
//         let total = 0;
//         for (let i = 1; i <= number; i += 1){
//                 total += i;
//         }
//         console.log(total);
//         return total;
// }
// calculateTotal(3);

// ----------Module2 task 19 Цикл for-----------

// const fruits = ['apple', 'plum', 'pear', 'orange','ggg'];

// for (let i = 0; i < fruits.length; i+=1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// ----------Module2 task 20 Цикл for сумма чисел массива-----------
// function calculateTotalPrice(order) {
//   let total = 0;
//         for (let i = 0; i < order.length;i+=1){
//        total += order[i];
// }
//     console.log(total);

//   return total;
// }
// calculateTotalPrice([1, 2, 3, 4]);

// ----------Module2 task 21 Цикл for of Пошук найбільшого числа-----------

// function findLongestWord(string) {
//       let getArray = string.split(" ");
//       let longestWord = getArray[0];
//       for (item of getArray) {

//             console.log(item.length );
//             if (item.length > longestWord.length) {
//                   longestWord = item;
//             }

//       }
//     return longestWord;

// }

// console.log(findLongestWord("The quick brown fox over the lazy dog")
// );

// ----------Module2 task 22 Метод push-----------

// function createArrayOfNumbers(min, max) {
//       const numbers = [];

//       for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//       }
//             return numbers;
// }

// console.log(createArrayOfNumbers(4, 8));

// ----------Module2 task 23 Цикл for and push-----------

// function filterArray(numbers, value) {
//   let newArray = [];
//   for (const number of numbers) {
//     console.log(number);
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 2));

// ----------Module2 task 24 Метод includes(value) Найти есть ли фрукт в массиве-----------

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }

// console.log(checkFruit("mandarin"));

// ----------Module2 task 25 Цикл for and push-----------

// function getCommonElements(array1, array2) {
//       const newArray = [];
//       for (let item of array1) {
//             if (array2.includes(item)) {
//                   newArray.push(item);
//             }
//       }
//       return newArray;
// }

// console.log(getCommonElements([7, 2, 3,4,5], [2, 4]));

// ----------Module2 task 28 Математический оператор %----------

// const a = 3 % 1; //0
// const b = 4 % 3; //1
// const c = 11 % 8; //3
// const d = 12 % 7;//5
// const e = 8 % 6;//2
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// ----------Module2 task 29 Математический оператор %----------
// function getEvenNumbers(start, end) {
//       let newArray = [];
//       for (i = start; i <= end; i += 1) {
//             if (i % 2 === 0) {
//                   newArray.push(i);
//             }
//       }
//       return newArray;
// }

// console.log(getEvenNumbers(2, 9));

// ----------Module2 task 30 Математический оператор % and break. Найти первое число деленное на 5----------
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//         number = i;
//            break;
//   }
// }

// console.log(number);

// ----------Module2 task 31 Математический оператор % and return .

// function findNumber(start, end, divisor) {

//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return number = i;
//     }
//   }

// }
// console.log(findNumber(6, 27, 5));

// ----------Module2 task 32  Содержит ли массив число?----

// function includes(array, value) {
//       for (let item of array) {
//             if (item === value) {
//                   return true;
//         }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 7));

// ----------Module3 Об'єкти. Звернення до об'єкту ---------

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };
// // Звернення var 1 основний:
// console.log(user.location.city);
// console.log(user.hobbies);
// console.log(user.hobbies[1]);
// // Звернення var 2 рідше:
// console.log(user["hobbies"]);

// ----------Module3 Об'єкти. Зміна значення властивості---------

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// let userName = user.name;
// userName = "Iryna";
// console.log(userName);
// user.password = "123";
// console.log(typeof user.password);

// ----------Module3 Об'єкти. Shorthand properties---------

// let herName = "Sofia";
// const age = 18;

// const user = {
//   herName,
//   age,
// };

// console.log(user.age);
// console.log(user.herName);

// ----------Module3 Об'єкти. Сomputed properties---------
// const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
// };

// console.log(user.name); // 'Генри Сибола'

// ----------Module3 Об'єкти. for...in---------
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// ----------Module3 Об'єкти. Метод Object.create(animal) создаёт
// и возвращает новый объект, связывая его с объектом animal---------

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(animal);
// console.log(dog); // {name: 'Манго'}
// // console.log(dog.name); // 'Манго'
// // console.log(dog.legs); // 4

// // Метод hasOwnProperty Возвращает true только для собственных свойств!!!!

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// ----------Module3 Об'єкти. Методи Object.keys(), Object.values(),Object.entries()

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
// const entries = Object.entries(book);
// console.log(entries);

// ----------Module3 Об'єкти. Массив об'єктів

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   // console.log(book);
//   // Название
//   // console.log(book.title);
//   // // Автор
//   // console.log(book.author);
//   // // Рейтинг
//   // console.log(book.rating);
// }

// ----------Module3 Task 4------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// console.log(apartment.owner.name);
// const ownerPhone = apartment.owner.phone;
// console.log(apartment.owner.phone);
// const ownerEmail = apartment.owner.email;
// console.log(apartment.owner.email);
// const numberOfTags = apartment.tags.length;
// console.log(apartment.tags.length);
// const firstTag = apartment.tags[0];
// console.log(apartment.tags[0]);
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(apartment.tags[apartment.tags.length-1]);
// // Change code above this line

// ----------Module3 Task 6------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// console.log(apartment.price);
// apartment.rating = 4.7;
// console.log(apartment.rating);
// apartment.owner.name = "Henry Sibola";
// console.log(apartment.owner.name);
// apartment.tags.push("trusted");
// console.log(apartment.tags);
// // Change code below this line

// ----------Module3 Task 10------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const item in apartment) {

//   keys.push(item);
//   values.push(apartment[item]);

// }
//  console.log(keys,values);
// // Change code below this line

// ----------Module3 Task 11------------
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
// console.log(apartment.hasOwnProperty(key));
//   }

// }

// ----------Module3 Task 12------------
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const obj in object) {
//     if (object.hasOwnProperty(obj)) {
//       propCount += 1;
//   }
// }
//   console.log(propCount);
//   return propCount;
//  }
// countProps({ name: "Mango", age: 2 });

// ----------Module3 Task 13------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {

//  values.push(apartment[key]);
// console.log(apartment [key]);

// }

// console.log(values);

// ----------Module3 Task 14------------
// countProps({ name: "Mango", age: 2 });
// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   console.log(keys);

//   for (const key of keys) {
//     console.log(key);
//     propCount += 1;
//   }
//   console.log(propCount);
//   return propCount;
// }

// ----------Module3 Task 16------------
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//     const employeeSalary = Object.values(salaries);
//   console.log(employeeSalary);
//   for (const salary of employeeSalary) {
//     // console.log(salary);
//     totalSalary += salary;
//   }
//     console.log(totalSalary);
//   return totalSalary;
// }

// ----------Module3 Task 17------------

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);

// }
//  console.log(hexColors, rgbColors);

// ----------Module3 Task 18 Знайти в масиві об'єтів name і вивести його price------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   let productPrice;
//   for (const product of products) {
//     if (productName === product.name) {
//       // console.log((productPrice = product.price));
//       return (productPrice = product.price);
//       }
//   }
//    return productPrice=null;
// }

// getProductPrice("Grip");

// ----------Module3 Task 19------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let productValues = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       productValues.push(product[propName]);
//         }
//   }
//    return productValues;
//  }

// ----------Module3 Task 20------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//         if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice("Scanner");

// ----------Module3 Task 26- Деструктуризація-----------

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
// console.log(todayLow);
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });

// ----------Module3 Task 27- Синтаксис ...(spread) min and max число-----------

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// console.log(bestScore);
// const worstScore = Math.min(...scores);
// console.log(worstScore);

// ----------Module3 Task 28- Синтаксис ...(spread) min and max число
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// console.log(allScores);
// const bestScore = Math.max(...allScores);
// console.log(bestScore);
// const worstScore = Math.min(...allScores);
// console.log(worstScore);

// ----------Module3 Task 30---------------

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// const newObject = { completed, category, priority, ...data };
//   console.log(newObject);
//   return newObject;
//   // Change code above this line
//   // console.log(completed, category, priority);

// }
// makeTask({ category: "Finance", text: "Take interest" });
// //

// ----------Module3 Task 31 Операція присвоєння...rest-------
// let total = 0;
// function add(...args) {
//   console.log(args);
//   for (let arg of args) {
//     total += arg;
//   }
//   return total;
// }
// add(1, 2, 3);
// console.log(total);

// ----------Module3 Task 32 Операція присвоєння...rest-------

// function addOverNum(firstNumber,...args) {
//   let total = 0;
//   console.log(args);

//   for (const arg of args) {
//     if (arg > firstNumber)
//     { total += arg; }
//   }
// console.log(total);
//   return total;

// }
// addOverNum(73, 74, 11, 62, 12, 36);

// ----------Module3 Task 33 Операція присвоєння...rest-------
// Change code below this line
// function findMatches(array,...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (array.includes(arg)){
//       matches.push(arg)
//     }
//   }
//   console.log(matches);
//   // Change code above this line
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

// ----------Module3 Task 34 -------------------------
//  const bookShelf = {
//    // Change code below this line
//    books: ["The last kingdom", "The guardian of dreams"],
//    getBooks() {
//      return "Returning all books";
//    },
//    addBook(bookName) {
//      return `Adding book ${bookName}`;
//    },
//    removeBook(bookName) {
//      return `Deleting book ${bookName}`;
//    },
//    updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//    }

//    // Change code above this line
// };

// bookShelf.updateBook('Sands of dune', 'Dune');

// ----------Module3 Task 35 -------------------------
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex,1);
//     this.books.splice(bookIndex, 0, newName);

//   },

// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.books);

// ----------Module3 Task 41 -------------------------

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name)
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       const potionIndex = this.potions.indexOf(potion);
//       console.log(potionIndex);
//       if (potion.name === potionName) {
//         console.log(potion.name === potionName);
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       const potionIndex = this.potions.indexOf(potion);
//       console.log(potionIndex);
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };



// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: "New", price: 700 });
// atTheOldToad.removePotion("h");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");





// ----------Module4 Task 2 -------------------------
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//         console.log(callback(pizzaName));
//   return callback(pizzaName);
// }
// makeMessage("Ultracheese", deliverPizza);


// ----------Module4 Task 3-------------------------
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });


// ----------Module4 Task 4-------------------------

// const pizzaPalace = {
//         pizzas: ["Ultracheese", "Smoked", "Four meats"],
//         order(pizzaName, onSuccess, onError) {
//         if(this.pizzas.includes(pizzaName)){
//                  console.log(onSuccess(pizzaName));
//                 return onSuccess(pizzaName);
//                 }
//                 console.log(
//                   onError(
//                     `There is no pizza with a name ${pizzaName}in the assortment.`
//                   )
//                 );
//                 return onError(
//                   `There is no pizza with a name ${pizzaName}in the assortment.`
//                 );
               
//         }
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ----------Module4 Task 5  Метод for Each-------------------------

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//         orderedItems.forEach(order =>
//                 totalPrice += order);
//         console.log(totalPrice);
//         return totalPrice;
       
 
// }
// calculateTotalPrice([12, 85, 37, 4]);

// ----------Module4 Task 6-------------------------

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//         numbers.forEach(number => {
//                 if (number > value) {
//                 filteredNumbers.push(number);}
//         });

//  console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 4);

// ----------Module4 Task 7-for Each------------------------

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//         firstArray.forEach(el => {
//                 if (secondArray.includes(el)) {
//                      commonElements.push(el)
//              }
//         });
// console.log(commonElements);
//   return commonElements;
//  }

// getCommonElements([1, 2, 3], [2, 4]);






// ----------Module4 Task 9 =>------------------------
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//    quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 100));
// calculateTotalPrice(5, 100);


// ----------Module4 Task 10 =>------------------------

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//         orderedItems.forEach((order) => {
//           console.log(order);
//     totalPrice += order;
//   });
// console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);


// ----------Module4 Task 11 ------------------------
// Change code below this line
// const filterArray=(numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number=> {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);


// ----------Module4 Task 12 ------------------------
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//  console.log(commonElements);
//   return commonElements;
// }

// getCommonElements([1, 2, 3], [2, 4]);


// ----------Module4 Task 13 ------------------------
// const changeEven =(numbers, value)=> {
//         const newArray = [];
//         numbers.forEach(number => {
//         number % 2 === 0?  newArray.push(number + value): newArray.push(number);
     
// });
//         console.log(newArray);
//         return newArray;
// }
// changeEven([17, 24, 68, 31, 42,6,9,2], 100);


// ----------Module4 Task 14 Метод map------------------------
// var 1
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = [];
// planets.forEach((planet) => planetsLengths.push(planet.length));
// console.log(planetsLengths);
// var 2
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// ----------Module4 Task 15 Метод map------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book=>book.title);
// console.log(titles);


// ----------Module4 Task 17-----------------------

// const users = [
//         {
//                 name: "Moore Hensley",
//                 email: "moorehensley@indexia.com",
//                 eyeColor: "blue",
//                 friends: ["Sharron Pace"],
//                 isActive: false,
//                 balance: 2811,
//                 skills: ["ipsum", "lorem"],
//                 gender: "male",
//                 age: 37,
//         },
//         {
//                 name: "Sharlene Bush",
//                 email: "sharlenebush@tubesys.com",
//                 eyeColor: "blue",
//                 friends: ["Briana Decker", "Sharron Pace"],
//                 isActive: true,
//                 balance: 3821,
//                 skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//                 gender: "female",
//                 age: 34,
//         },
//         {
//                 name: "Ross Vazquez",
//                 email: "rossvazquez@xinware.com",
//                 eyeColor: "green",
//                 friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//                 isActive: false,
//                 balance: 3793,
//                 skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//                 gender: "male",
//                 age: 24,
//         },
//         {
//                 name: "Elma Head",
//                 email: "elmahead@omatom.com",
//                 eyeColor: "green",
//                 friends: ["Goldie Gentry", "Aisha Tran"],
//                 isActive: true,
//                 balance: 2278,
//                 skills: ["adipisicing", "irure", "velit"],
//                 gender: "female",
//                 age: 21,
//         },
//         {
//                 name: "Carey Barr",
//                 email: "careybarr@nurali.com",
//                 eyeColor: "blue",
//                 friends: ["Jordan Sampson", "Eddie Strong"],
//                 isActive: true,
//                 balance: 3951,
//                 skills: ["ex", "culpa", "nostrud"],
//                 gender: "male",
//                 age: 27,
//         },
//         {
//                 name: "Blackburn Dotson",
//                 email: "blackburndotson@furnigeer.com",
//                 eyeColor: "brown",
//                 friends: ["Jacklyn Lucas", "Linda Chapman"],
//                 isActive: false,
//                 balance: 1498,
//                 skills: ["non", "amet", "ipsum"],
//                 gender: "male",
//                 age: 38,
//         },
//         {
//                 name: "Sheree Anthony",
//                 email: "shereeanthony@kog.com",
//                 eyeColor: "brown",
//                 friends: ["Goldie Gentry", "Briana Decker"],
//                 isActive: true,
//                 balance: 2764,
//                 skills: ["lorem", "veniam", "culpa"],
//                 gender: "female",
//                 age: 39,
//         },
// ];
// console.table(users);
// console.log(users[0]);



// // Change code below this line
// const getUserNames = users => {
// return  users.map((user) => user.name);
// };
// console.log(users.map(user=>user.name));


// ----------Module4 Task 18-----------------------

// const getUserEmails = (users) => {
//         users.map(user => user.email);
     
// };
// console.log(users.map((user) => user.email));
// console.log(users);

// ----------Module4 Task 19-----------------------
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];


// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);

// ----------Module4 Task 20-----------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index)
// console.log(uniqueGenres);

// ----------Module4 Task 21----------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// console.table(topRatedBooks);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.table(booksByAuthor);

// ----------Module4 Task 22----------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUsersWithEyeColor = (users, color) => {
//      console.table(users.filter((user) => user.eyeColor === color));
//      return users.filter(user => user.eyeColor === color);
       
// };
// getUsersWithEyeColor(users, "blue");

// ----------Module4 Task 23----------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUsersWithAge = (users, minAge, maxAge) => {
//         console.table(
//           users.filter((user) => user.age >= minAge && user.age <= maxAge)
//         );
// return users.filter((user) => user.age >= minAge && user.age<=maxAge);
// };

// getUsersWithAge(users, 24, 38);
// console.table(users);

// ----------Module4 Task 24----------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];


// console.table(users);
// const getUsersWithFriend = (users, friendName) => {
//   console.log(users.filter((user) => user.friends.includes(friendName)));
//   return users.filter((user) =>
//     user.friends.includes(friendName));
// };
// getUsersWithFriend(users, "Goldie Gentry");


// ----------Module4 Task 25-----filter and indexOf-----------------
// const getFriends = (users) => {
//   const friends = users.flatMap(user => user.friends);
//   console.log(friends);
//   const uniqueFriend = friends.filter((friend, index, array) =>
//     array.indexOf(friend) === index
//   );
//   console.log(uniqueFriend);
//   return uniqueFriend;
 
// };
// getFriends(users);


// ----------Module4 Task 26----------------------
// const getActiveUsers = (users) => {
// console.log(users.filter((user) => user.isActive === true));
//   return users.filter(user => user.isActive === true);
//   };

// getActiveUsers(users);


// ----------Module4 Task 27----------------------
// const getInactiveUsers = (users) => {
//   console.log(users.filter((user) => user.isActive === false));
//   return users.filter((user) => user.isActive === false);
// };
// getInactiveUsers(users);

// ----------Module4 Task 28----Метод find------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// console.log(bookWithTitle);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookByAuthor);


// ----------Module4 Task 30----Метод every-----------------
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0);
// console.log(eachElementInFirstIsEven);
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);
// console.log(eachElementInFirstIsOdd);
// const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);
// const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);

// ----------Module4 Task 31----Метод every-----------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const isEveryUserActive = (users) => {
//   console.log(users.every((user) => user.isActive));
//   return users.every(user => user.isActive);
// };

// isEveryUserActive(users);


// ----------Module4 Task 34----Метод reduce()-----------------
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// console.log(playtimes);
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousTime, time) => previousTime+time);
// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);



// ----------Module4 Task 35----Метод reduce()-----------------
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


// const totalAveragePlaytimePerGame = players.reduce((totalPlayer, player) => {
//   console.log(totalPlayer + player.playtime / player.gamesPlayed);
//   return totalPlayer + player.playtime / player.gamesPlayed;
// }, 0);

// ----------Module4 Task 36----Метод reduce()-----------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // Change code below this line
// const calculateTotalBalance = users => {
// return users.reduce((totalBalance, user) => {
// console.log(totalBalance + user.balance);
// return totalBalance + user.balance;
// }, 0);
// };
// calculateTotalBalance(users);



// ----------Module4 Task 37----Метод reduce()-----------------
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalFriendCount = (users) => {
//         return users.reduce((total, user) => {
//         return total + user.friends.length;
//         },0)
        
// };

// getTotalFriendCount(users);


// ----------Module4 Task 38----Метод sort()-----------------
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

// ----------Module4 Task 39----Метод sort()-----------------
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=>a-b);
//   console.log(ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates);

// ----------Module4 Task 41----Метод localeCompare()-----------------
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
// console.log(authorsInAlphabetOrder);
// const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));;
// console.log(authorsInReversedOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));
// // console.table(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );
// // console.table(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((a, b) =>
//   a.rating -b.rating);
// console.table(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


// ----------Module4 Task 42----Метод sort()-----------------
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const sortByAscendingBalance = (users) => {
//   console.table([...users].sort((a, b) => a.balance - b.balance));
//   return [...users].sort((a, b) => a.balance - b.balance);
// };
// sortByAscendingBalance(users);


// ----------Module4 Task 45----ланцюжок----------------
//  const books = [
//    {
//      title: "The Last Kingdom",
//      author: "Bernard Cornwell",
//      rating: 8.38,
//    },
//    {
//      title: "Beside Still Waters",
//      author: "Robert Sheckley",
//      rating: 8.51,
//    },
//    {
//      title: "The Dream of a Ridiculous Man",
//      author: "Fyodor Dostoevsky",
//      rating: 7.75,
//    },
//    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//    {
//      title: "The Dreams in the Witch House",
//      author: "Howard Lovecraft",
//      rating: 8.67,
//    },
//  ];
//  const MIN_BOOK_RATING = 8;
//  // Change code below this line

// const names = [...books].filter(book => book.rating > MIN_BOOK_RATING).map(book=>book.author).sort();
// console.table(names);


// ----------Module4 Task 46----ланцюжок----------------
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort((user1, user2) => user1.friends.length - user2.friends.length)
//     .map(user => user.name);

// };
// getNamesSortedByFriendCount(users);


// ----------Module4 Task 47----ланцюжок----------------
// const getSortedFriends = (users) => {
//   return [...users]
//     .flatMap((user) => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));
  
// };
// getSortedFriends(users)

// ----------Module4 Task 48----ланцюжок----------------
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//       .filter((user) => user.gender === gender)
//       .reduce((total, user) => {
//         return total + user.balance;
//       }, 0);

// };
// getTotalBalanceByGender(users, "female");