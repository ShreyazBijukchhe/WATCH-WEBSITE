var cartIcon = document.getElementById("openCart");
var cartList = document.getElementsByClassName("cartBox");

cartIcon.addEventListener("click",()=>{

    Array.from(cartList).forEach((cart)=>{
        cart.classList.remove("hidden");
    })
    
})

// cancle button on the  cart
let cartClose = document.getElementById("cartClose");

// if cancle button is clicked hidden class is added to the 
// form to hide it
cartClose.addEventListener('click',(e)=>{
    e.preventDefault()
    Array.from(cartList).forEach((item)=>{
        item.classList.add("hidden");
    })
})

// showing item in the cartbox

var cartCount = document.getElementById("cartCount");
var addToCart = document.getElementsByClassName("addToCart");
var productCount = 0;
var cart = document.getElementById("cart");
var totalPrice = 0;
var productId = 1;

Array.from(addToCart).forEach((item)=>{
    item.addEventListener("click",(e)=>{
    // getting the details of product 
    var product = e.target;
    var card = product.parentElement.parentElement;
    var image = card.querySelector(".img").getAttribute("src");
    console.log(image);
    var name = card.querySelector(".productName").innerText;
    var price = card.querySelector(".productPrice").innerText;

    productCount = productCount+1;
    cartCount.innerText = productCount;

    // adding item in the cartbox
    var cartItem = `<div class="cartItem">
                    <div class="itemPic"><img src="${image}" alt=""></div>
                    <div class="itemName">${name}</div>
                    <div class="itemPrice">${price}</div>
                    <button id="${productId}" class="removeItem btn" style="background-color: tomato;">Remove</button>
                </div>`;



    cart.insertAdjacentHTML("afterbegin", cartItem);

    totalPrice = totalPrice + parseFloat(price);
    console.log(totalPrice);
    document.getElementById("totalPrice").innerText = totalPrice;


// removing cart item
var removeButton =  document.getElementById(productId);


// adding event listener to only the item with specific id
removeButton.addEventListener("click",(e)=>{
        var clickedButton = e.target;
        var item = clickedButton.parentElement;
        var price = item.querySelector(".itemPrice").innerText;
        console.log(`before = ${totalPrice}`);
        console.log(`price = ${price}`);
        totalPrice = totalPrice - parseFloat(price);
        console.log(`after = ${totalPrice}`);

        document.getElementById("totalPrice").innerText = totalPrice;
        
        // updating the number near cart icon
        productCount = productCount - 1;
        if(productCount <= 0){
            cartCount.innerText = 0;
        }
        else{
            cartCount.innerText = productCount;
        }
        


        //removing the item
        item.remove();
    })
    productId = productId + 1;


})

});
    



