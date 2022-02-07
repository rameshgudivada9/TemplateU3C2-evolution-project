
var url="https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"

var menu=document.querySelector("#menu");

 async function getData(){
try{
   let res=await fetch(url);

   let data=await res.json();

   displayData(data);

   console.log(data);

  } catch(err){

   console.log(err);

   }

}

getData();

let cart = JSON.parse(localStorage.getItem("cart"))||[]; 
        refreshCartCount(cart);


      function refreshCartCount(cart) {
        let cartCount = document.getElementById("count");
        cartCount.textContent = " Cart Count : " + cart.length;
      }



function displayData(data){

data.meals.forEach(function(el){

    let div=document.createElement('div');
    
        let title=document.createElement('h3');
        title.innerText=`${el.strMeal}`;

    let img=document.createElement('img');
    img.src=el.strMealThumb;

    let idmeal=document.createElement('p');
    idmeal.innerText=`OrderId--${el.idMeal}`;

    let price=document.createElement('h3');
    price.innerText=`₹ ${el.price=Math.ceil(Math.random()*500)}`;

    let button=document.createElement('button');
    button.setAttribute("id","addtocart");
    button.textContent="ADD TO CART"
    button.onclick = function (event) {
            addToCart(el);
          };
  
   div.append(title,img,idmeal,price,button);

menu.append(div);


});

}


function addToCart(el) {

          cart.push(el); 

          console.log(cart)

          localStorage.setItem("cart", JSON.stringify(cart)); 
          refreshCartCount(cart);
          alert("succussfully added")
        }
