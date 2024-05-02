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
                  <td>$${product.price * product.quantity }</td>
              
                  <td>
       <input class="input" type="number" value="${product}" width="20px" height="30px" oninput="updateQuantityAndTotal(this, ${product.price})">
</td>
 
              <td id="total_${product.id}">${product.price * product.quantity}</td>
               
                   <td><i class="fa-solid fa-trash" onclick="removeItemById(${product.id})" ></i></td>
                </tr>
    `;
});
tbody.innerHTML = html;



// Parse the JSON array into a JavaScript array
const products = JSON.parse(localstorage.getItem("product")) || [];

// Function to remove an item from the array based on its id
function removeItemById(id) {
    // Find the index of the item with the matching id
    const index = localstorage.findIndex(product => product.id === id);
    
    // If the item is found (index is not -1), remove it from the array
    if (index !== -1) {
        products.splice(index, 1);
    }
}

// Usage example: remove the item with id 2
const idToRemove = 2;
removeItemById(idToRemove);

// Convert the modified array back to JSON
const updatedProductsJSON = JSON.stringify(products);
console.log(updatedProductsJSON);


function updateQuantityAndTotal(input, price,product) {

  // Get the new quantity value
  const newValue = input.value;
  console.log(newValue)
  // Update the total cell
  const totalCell = document.getElementById(`total_${productId}`);
  totalCell.textContent = `$${price * newValue}`;
  
}
