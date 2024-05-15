// Initialize the num variable from localStorage
let num = localStorage.getItem('numItems') ? parseInt(localStorage.getItem('numItems')) : 0;

// Function to update the cart item count display
function numberOfItems() {
  let numberCartItems = document.querySelector('.num-items');
  if (num > 0) {
    numberCartItems.classList.add('add-background');
    numberCartItems.innerHTML = num;
  } else {
    numberCartItems.classList.remove('add-background');
    numberCartItems.innerHTML = ''; // Clear the inner HTML if num is 0
  }
}

// Function to handle adding items to the cart
function addToCart() {
  num++;
  localStorage.setItem('numItems', num);
  numberOfItems();
}

function removeItem(all) {
  if (num > 0&&all==='all') {
    const contain_items=document.querySelector('.container-added-carts');
    contain_items.classList.add("remove-display");
    num=0;
    localStorage.setItem('numItems', num);
    numberOfItems();
  }
  if(num > 0&&all==='one') {
    const contain_items=document.querySelector('.container-added-carts');
    contain_items.classList.add("remove-display");
    num--;
    localStorage.setItem('numItems', num);
    numberOfItems();
  }
}

// var addtocarter=document.getElementsByClassName("addTocart-btn");
// for (var i = 0; i < addtocarter.length; i++) {
//   addtocarter[i].onclick = function(event) {
//     addToCart();
//   }}
// Call numberOfItems() when the page loads to initialize the cart item count

document.addEventListener('DOMContentLoaded', numberOfItems);



// DISPAY ITEM TO CART PART
const contain_items=document.querySelector('.container-added-carts');
contain_items.classList.add("remove-display");


var buttons = document.getElementsByClassName("addTocart-btn");

function displayAddedCart(name_pic, name, price,type) {
  var contain_items=document.querySelector('.container-added-carts');
  contain_items.classList.remove("remove-display");
  contain_items.innerHTML = `
      <div class="pic-item"><img src="imgs/items-pic/${name_pic}.png" alt=""></div>
      <div class="item-function">
          <div class="item-name">${name}</div>
          <div class="quant-price">
              <button class="decrease">-</button>
              <p class="quantity">1</p>
              <button class="increase">+</button>
          </div>
          <p class="item-price">&#8369;${price}</p>
          <div class="remove-buy">
              <button class="remove-cart" onclick="removeItem('one');">Remove</button>
              <button class="go-checkout" onclick="goToCheckout('${name_pic}', '${name}', ${price}, '${type}');">Buy</button>
          </div>
      </div>`;

      function removeItemcart(){
        contain_items.classList.add("remove-display");
      }
      // END OF DISPLAY ITEM TO CART
      const decreaseBtn = contain_items.querySelector('.decrease');
      const increaseBtn = contain_items.querySelector('.increase');
      const quantity = contain_items.querySelector('.quantity');
      const itemPrice = contain_items.querySelector('.item-price');
  
      let count = 1; // Initial quantity
      let totalPrice = parseFloat(price); // Initial price
  
      decreaseBtn.addEventListener('click', () => {
          if (count > 1) {
              count--;
              quantity.textContent = count;
              itemPrice.textContent = (parseFloat(price) * count).toFixed(2);
          }
      });
  
      increaseBtn.addEventListener('click', () => {
          count++;
          quantity.textContent = count;
          itemPrice.textContent = (parseFloat(price) * count).toFixed(2);
      });
  }
  function goToCheckout(name_pic, name, price, type) {
    // Store item details in sessionStorage
    sessionStorage.setItem('item_pic', name_pic);
    sessionStorage.setItem('item_name', name);
    sessionStorage.setItem('item_price', price);
    sessionStorage.setItem('item_type', type);

    // Redirect to checkout page
    window.location.href = "checkout.html";
}
  // END OF SIDE BAR
  
  // SIDE BAR (ADDED TO CART)

  const side_bar=document.getElementById("side-bar");
  function sideBar(){
    if(side_bar.style.right==="-460px"){
      side_bar.style.right="0";
    }else{
      side_bar.style.right="-460px";
    }
  }

  //LINK 'SHOW NOW(HOMEPAGE)' BUTTON TO ALL PRODUCTS
  var shopNow=document.querySelector('.shopNow');
  shopNow.onclick=function(){
    window.location.href="all-items.html";
  };


