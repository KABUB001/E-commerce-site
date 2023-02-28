//cart
let cartIcon = document.querySelector('.logo-panier');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//Open cart
cartIcon.addEventListener("click", function(){
    
    cart.classList.add('active');
    cartIcon.style.color = "red";
})

//Close cart
closeCart.addEventListener("click", function(){
    
    cart.classList.remove('active');
    cartIcon.style.color = "black";
})


// Cart Working JS
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else {
    ready();
}
//Making ready function
function ready(){
    // Remove Items from cat
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem)
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }
    //Add To Cart
    var addCart = document.getElementsByClassName('boutton-panier');
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked)
    }
    //Buy Button Work
    document.getElementsByClassName("bt")
}

//Remove Items From Cart
function removeCartItem(e){
    var buttonClicked = e.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}
//Quantity Changed
function quantityChanged(e){
    var input = e.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1; 
    }
    updateTotal()
}

//Added To cart
function addCartClicked(e){
    var button = e.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('name')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    console.log(productImg);
    addProductToCart(title, price, productImg);
    updateTotal();
}
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert("You have already add this item to cart");
            return;
        }
        
        
    }
    

var cartBoxContent = `
    <img class="cart-img" src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
        </div>
        <!--Retirer Panier-->
     <i class="fa-solid fa-trash-can cart-remove" style="color: red" ></i>`

     cartShopBox.innerHTML = cartBoxContent
     cartItems.append(cartShopBox)
     cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener("click", removeCartItem);
     cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener("change", quantityChanged);}
//Update Total

function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("FCFA", ""))
        var quantity = quantityElement.value;
        total = total + (price * quantity);
            //If price Contain some Cents Value
            total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = total + " FCFA";
    }
}


//For Carousel

const image = document.querySelector("#image-principale");

const tab = ["slide1.jpg", "slide2.jpeg", "slide3.webp", "slide4.webp", "slide5.jpeg", "slide6.jpeg"];
let numero = 0;
function changeImage(a){
    if (a > 0){
        image.src = "images/" + tab[numero];
        numero += 1;
        if(numero == 5){numero = 0}
    }
}
setInterval("changeImage(1)", 2000)




















/*function saveBasket(){
    localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket(){
    let basket = localStorage.getItem("basket");
    if(basket == null){
        return [];
    }else{
        return JSON.parse(basket);
    }
    
}

function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id)
    if(foundProduct != undefined){
        foundProduct.quantity ++;
    }else {
        product.quantity = 1;
        basket.push(product);
    }
    
    saveBasket(basket);
}

function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket();
}
function changeQuantity(product, quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id)
    if (foundProduct != undefined){
        foundProduct.quantity += quantity;
        if(foundProduct.quantity  <= 0){
            removeFromBasket(foundProduct);
        }
        else {
            saveBasket(basket);
        }
    }

    function getNumberProduct(){
        let basket = getBasket();
        let number = 0;
        for(let product of basket){
            number += product.quantity;
        }
        return number;
    }

    function getNumberProduct(){
        let basket = getBasket();
        let total = 0;
        for(let product of basket){
            total += product.quantity * product.price;
        }
        return total;
    }
    
}*/