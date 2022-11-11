console.log("Hello world!");

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
