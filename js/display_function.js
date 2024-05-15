const contain_items=document.querySelector('.container-added-carts');
contain_items.classList.add("remove-display");


var buttons = document.getElementsByClassName("addTocart-btn");

    function displayAddedCart(name_pic,name,price){
      contain_items.classList.remove("remove-display");
      contain_items.innerHTML=`<div class="pic-item"><img src="imgs/items-pic/${name_pic}.png" alt=""></div>

      <div class="item-function">

        <div class="item-name">${name}</div>
        <div class="quant-price">
        
        <button class="decrease">-</button>

        <p class="quantity">1</p>

       <button class="increase">+</button>
        </div>
        <p class="item-price">${price}</p>
        <div class="remove-buy">
          <button class="remove-cart">Remove</button>
          <button class="go-checkout">Buy</button>
        </div>

      </div>`;
      const goCheckout=contain_items.querySelector('.go-checkout').onclick=function(){
        window.location.href="checkout.html";
       };
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
   
    
       
    // ADD QUANTITY
    
    

  
