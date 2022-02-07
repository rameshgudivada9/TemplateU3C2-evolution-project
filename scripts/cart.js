

let cart = JSON.parse(localStorage.getItem("cart"))||[];

displayData(cart);


function displayData(cart){

    document.querySelector("#cart").innerHTML="";


cart.forEach(function(el,index){

let div=document.createElement('div');

    let title=document.createElement('h3');
    title.innerText=`${el.strMeal}`;

let img=document.createElement('img');
img.src=el.strMealThumb;

let idmeal=document.createElement('p');
idmeal.innerText=el.idMeal;

let price=document.createElement('h3');
price.innerText=el.price=Math.ceil(Math.random()*500);

let button=document.createElement('button');
button.setAttribute("id","remove")
button.textContent="remove"
button.onclick = function (event) {
        delItem(index);
      };


div.append(title,img,idmeal,price,button);
document.querySelector("#cart").append(div);

});


var total=cart.reduce(function(ac,cv){
 return ac+Number(cv.price);
},0);

totalDisplay(total)

};

function totalDisplay(total){
document.querySelector("#total").textContent=`Total amount is ₹ ${total}`;
}


function delItem(index){

    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayData(cart);
    refreshCartCount(cart);
}