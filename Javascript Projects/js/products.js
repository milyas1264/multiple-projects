// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mobile", price: 20000 },
//   { name: "Tablet", price: 30000 },
// ];
// function searchProduct() {
//   let input = document.getElementById("searchinput").value;
//   let result = document.getElementById("result");
//   let found = null;

//   for (let i = 0; i < products.length; i++) {
//     if (products[i].name.toLowerCase() === input.toLowerCase()) {
//       found = products[i];
//       break;
//     }
//     if (found) {
//       result.innerText = `Name: ${found.name}, Price: ${found.price}`;
//     } else {
//       result.innerText = "Product not found";
//     }
//   }
// }

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 30000 },
  
];

function searchProduct() {
  let input = document.getElementById("searchInput").value;
  let result = document.getElementById("result");

  let found = null;

  for (let i = 0; i < products.length; i++) {
    //Agar input empty ho:
    if (input.trim() === "") {
      console.log("Please enter a product name");
      result.innerText = "Please enter a product name";
      return; // Exit the function if input is empty
    }
    //Partial search allow karega:;
    if (products[i].name.toLowerCase().includes(input.toLowerCase())) {
      found = products[i];
      break;
    }
    
  }

  if (found) {
    result.innerText = `Name: ${found.name}, Price: ${found.price}`;
  } else {
    result.innerText = "Product not found";
  }
}

function showAll() {
  let result = document.getElementById("result");
  products.forEach((e ) => {
    return console.log(e.name);
  });
  
  result.innerText =`${products.map((e) => e.name).join("\n")}`;
  
}

//