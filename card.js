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
                  <td>$${product.price}</td>
                  <td>
                    <input  id="input" type="number"  id="input"   value="${
                      product.quantity
                    }" width="20px" height="30px" >
                  </td>
                  <td>$${product.price * product.quantity}</td>
                   <td><i class="fa-solid fa-trash"></i></td>
                </tr>
    `;
});
tbody.innerHTML = html;
