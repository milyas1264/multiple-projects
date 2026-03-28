// // let arr = [10, 20, 30, 40, 50];
// // // let allelement = arr.forEach((e) => {
// // //   console.log(e);
// // // });
// // for (let i = 0; i < arr.length; i++){
// //   console.log(arr[i]);

// // }
// // //sum off arraylet sum = 0;
// // let sum = 0;
// // for (let i = 0; i < arr.length; i++){
// //   sum += arr[i];
// // }
// // console.log(sum);
// // for (let i = 0; i < arr.length; i++){
// //   if (arr[i] % 2 === 0){
// //     console.log(arr[i] + " is even");
// //   } else {
// //     console.log(arr[i]);
// //   }
// // }

// let arr = [5, 12, 8, 20, 3];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++){
//   if (arr[i] > max){
//     max = arr[i];
//   }
// }
// console.log("Maximum element in the array is: " + max);

// //even odd
// let evenCount = 0;
// let oddCount = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] % 2 === 0){
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }
// console.log("Number of even elements: " + evenCount);
// console.log("Number of odd elements: " + oddCount);

// //reverse array
// let reversedArr = [];
// for (let i = arr.length - 1; i >= 0; i--){
//   reversedArr.push(arr[i]);
// }
// console.log("Reversed array: " + reversedArr);

// let arr = [10, 20, 30, 40];
// let included = arr.includes(30);
// console.log(included);

//remove duplicates
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

// //greater than 10
// let arr2 = [5, 15, 8, 20, 3];
// let greater = [];
// for (let i = 0; i < arr2.length; i++){
//   if (arr2[i] > 10){
//     greater.push(arr2[i]);
//   }
// }
// console.log(greater);

// //age greater than 18
// let users = [
//   { name: "Ali", age: 20 },
//   { name: "Ahmed", age: 17 },
//   { name: "Sara", age: 22 },
// ];
// let adults = [];
// for (let i = 0; i < users.length; i++){
//   if (users[i].age > 18) {
//     adults.push(users[i]);
//   }
// }
// console.log(adults);

//search by name
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 30000 },
];
let searchName = "Mobile";
let foundProduct = null;
for (let i = 0; i < products.length; i++) {
  if (products[i].name === searchName) {
    foundProduct = products[i];
    break;
  }
}
console.log(foundProduct);

let cheapProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].price < 30000) {
    cheapProducts.push(products[i]);
  }
}

console.log(cheapProducts);

let names = [];

for (let i = 0; i < products.length; i++) {
  names.push(products[i].name);
}

console.log(names);

let prices = [];

for (let i = 0; i < products.length; i++) {
  prices.push(products[i].price);
}

console.log(prices);

let names1 = products.map((p) => p.name);
console.log(names1);