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
   
  const itemDetails=document.querySelector('.item-details');

  function displayItemDetail(name_pic,name,price,type){
    
    itemDetails.innerHTML=`
    <!-- start item detail -->
    <div class="item-check">
      <p class="title"><b>Order Details</b></p>
      <div class="itemPic">
        <img src="imgs/items-pic/${name_pic}.png" alt="">
        <div class="name-type">
          <div>
            <p class="itemName"><b>${name}</b></p>
            <p class="typeItem">${type}</p>
          </div>
          <div class="price-item">
            <p>&#8369;</p>
            <p><b>${price}.00</b></p>
          </div>
        </div>
      </div>
    </div>
    <!-- end item detail -->

    <!-- summary -->
    <div class="item-summary">
      <p class="title"><b>Summary</b></p>
      <p class="subTotal"><b>Subtotal</b> <span>${price}.00</span></p>
      <p class="delivery-fee"><b>Delivery Fee</b> <span>7.00</span></p>
    </div>
    <!-- end summary -->

    <!-- total -->
    <div class="total-price">
      <p class="total"><b>Total</b> <span>${price+7}.00</span></p>
    </div>
    <!-- end total -->
  </div>
    `;
  };
    
       
    // ADD QUANTITY
    
    

  
