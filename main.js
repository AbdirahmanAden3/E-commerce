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


let trash = document.getElementById("trash")

trash("click", () => { 
    alert("delete")

})

trash.addEventListener("click", () => {
    alert("delete")
})  

