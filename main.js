let CartTotal = 0
function AddtoCart() {
    CartTotal += 1
  document.getElementById("cart")
    .CartTotal+=1


  

}

function AddCart() {
    var card = document.getElementById("cart");

    if(CartTotal === 0) {
        card.innerHTML = CartTotal+=1;
     
    } 
    else {
        card.innerHTML =  CartTotal+=2;
    }
   
}



const input  =  document.getElementById("input");

input.addEventListener("click", () => { 
    alert("clicked")
    console.log("ffffff")
})


const sub = document.getElementById("subtotal");

sub.addEventListener("click", () => {
    alert("clicked")
    console.log("clicked")
})


const btn = document.getElementsByTagName("button");
const totalSpan = document.getElementById('total');
  //intialazing
  let total = 0;
  
    // Function to update the total and display
    function updateTotal() {
      total++;
      totalSpan.textContent = total;
    }

    // Add event listener to the button
    increaseBtn.addEventListener('click', updateTotal);



function displayCart() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });
}









// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Total Increase</title>
// </head>
// <body>
//   <h1>Total: <span id="total">0</span></h1>
//   <button id="increaseBtn">Increase Total</button>

//   <script>
//     // Get references to the button and total span
//     const increaseBtn = document.getElementById('increaseBtn');
//     const totalSpan = document.getElementById('total');

//     // Initialize total value
//     let total = 0;

//     // Function to update the total and display
//     function updateTotal() {
//       total++;
//       totalSpan.textContent = total;
//     }

//     // Add event listener to the button
//     increaseBtn.addEventListener('click', updateTotal);
//   </script>
// </body>
// </html>

