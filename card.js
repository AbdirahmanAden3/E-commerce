let tbody = document.querySelector("#tbody");
let localstorage = JSON.parse(localStorage.getItem("product")) || [];

let html = "";
localstorage.map((product) => {
  html += `
    
    <tr> 
                  <td> 
                     <div class="s">
                    <img src="./img/${
                      product.img
                    }" style="border-radius: 4px;"  width="40px"  height="40px" alt="">
                    </div>
                  </td>
                  
                  <td>${product.name}</td>
                  <td>$${product.price * product.quantity}
                 <div class="d-none">${product.id}</div>   
                  </td>
              
                  <td>
       <input class="input" type="number" value="${
         product.quantity
       }" width="20px" height="30px" oninput="updateQuantityAndTotal(this, ${
    product.price
  })">
</td>
 
              <td id="total_${product.id}">${
    product.price * product.quantity
  }</td>
            
                   <td><i class="fa-solid fa-trash" id='remove'></i></td>
                </tr>
    `;
});
tbody.innerHTML = html;

// // Parse the JSON array into a JavaScript array
// const products = JSON.parse(localstorage.getItem("product")) || [];

// // Function to remove an item from the array based on its id
// function removeItemById(id) {
//   // Find the index of the item with the matching id
//   const index = localstorage.findIndex((product) => product.id === id);

//   // If the item is found (index is not -1), remove it from the array
//   if (index !== -1) {
//     products.splice(index, 1);
//   }
// }

// // Usage example: remove the item with id 2
// const idToRemove = 2;
// removeItemById(idToRemove);

// // Convert the modified array back to JSON
// const updatedProductsJSON = JSON.stringify(products);
// console.log(updatedProductsJSON);

// function updateQuantityAndTotal(input, price, product) {
//   // Get the new quantity value
//   const newValue = input.value;
//   console.log(newValue);
//   // Update the total cell
//   const totalCell = document.getElementById(`total_${productId}`);
//   totalCell.textContent = `$${price * newValue}`;
// }

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    // Using contains() instead of ==
    let id =
      e.target.parentElement.parentElement.children[2].children[0].innerText;
    let localStorageGet = JSON.parse(localStorage.getItem("product")) || [];

    let filteredLocal = localStorageGet.filter(function (product) {
      return product.id != id; // Filter out the item with the matching id
    });

    localStorage.setItem("product", JSON.stringify(filteredLocal));
    window.location = "/cart.html";
  }
});

// let remove = document.querySelectorAll("#remove");

// remove.addEventListener("click", (e) => {
//   alert("Are you sure you want to delete all items?");
//   console.log(
//     e.target.parentElement.parentElement.children[2].children[0].innerText
//   );

// Clear localStorage
// localStorage.removeItem("product");

// Clear HTML content
// tbody.innerHTML = "";
// });
