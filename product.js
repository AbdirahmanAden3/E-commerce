 let card = document.querySelector("#cards");

const product = [

    {
        id: 1,
        name: "stroweber",
        price: 2,
        img:  "product-img-1.jpg",
        description:  "iican"

    },
    {  
        id: 2,
        name: "lemon",
        price: 1,
        img :  "product-img-3.jpg",
        description:  "waa n"
    },
    {  
        id: 3,
        name: "juice",
        price: 2,
        img:  "product-img-6.jpg",
        description:  "waa tufafiican"

    }

]





let htm = ''


product.map((item) => {
    console.log(item) 
    htm += `

    <div class="col-md-3" >
    <div class="card ">
       
        <img src="./img/${item.img}" alt="">
        <div class="card-body w-300 ">
          <h2 class="card-1 text-center h-30px">${item.name}</h2>
          <p class="card-text text-center">${item.description}</p>
          <h3 class="text-center">$${item.price}</h3>

          <div class="star text-center text-warning ">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-sta"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
            <div class="btn">
             <div class="d-none">${item.id}</div>
              <button type="button"  class="btn btn-warning text-white ">
               
                Add Cart<i class="fa-solid fa-cart-shopping"  ></i>    
                
              </button>
            </div>
        </div>
    </div>
  </div>

    `

})

card.innerHTML = htm
card.addEventListener("click", (e) => {
  if(e.target.classList.contains("btn") === true){ 
    let id = e.target.parentElement.children[0].innerText 
    let fil = product.filter(function (product) {
        if (product.id == id) {
          return "as";
        }

      });

      let localstorage = localStorage.getItem("product");




      let filter = localstorage.filter(function (product) {
        if (product.id == fil[0].id) {
          return "as";
        }

      });
      console.log(filter)
    


    
  }

    
    
})





