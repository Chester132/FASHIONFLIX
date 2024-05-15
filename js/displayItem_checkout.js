//LINK A 'BUY NOW' BUTTON TO CHECKOUT PAGE
function displayItemDetail(name_pic, name, price, type) {
  const itemDetails = document.querySelector('.item-details');
  const deliveryFee = 7;
  const totalPrice = price + deliveryFee;

  itemDetails.innerHTML = `
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
      <p class="total"><b>Total</b> <span>${totalPrice}.00</span></p>
    </div>
    <!-- end total -->
  `;
}

// Add event listeners to "buyNow-btn" buttons
var buttons = document.getElementsByClassName("buyNow-btn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function(event) {
    // Get item details from data attributes
    const name_pic = this.getAttribute('data-pic');
    const name = this.getAttribute('data-name');
    const price = parseInt(this.getAttribute('data-price'));
    const type = this.getAttribute('data-type');

    // Store item details in sessionStorage
    sessionStorage.setItem('item_pic', name_pic);
    sessionStorage.setItem('item_name', name);
    sessionStorage.setItem('item_price', price);
    sessionStorage.setItem('item_type', type);

    // Redirect to checkout page
    window.location.href = "checkout.html";
  };
}

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve item details from sessionStorage
  const name_pic = sessionStorage.getItem('item_pic');
  const name = sessionStorage.getItem('item_name');
  const price = parseInt(sessionStorage.getItem('item_price'));
  const type = sessionStorage.getItem('item_type');

  // Call displayItemDetail to show item details
  displayItemDetail(name_pic, name, price, type);
});

 // Include the displayItemDetail function here or in an external script file
 function displayItemDetail(name_pic, name, price, type) {
  const itemDetails = document.querySelector('.item-details');
  const deliveryFee = 7;
  const totalPrice = price + deliveryFee;

  itemDetails.innerHTML = `
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
      <p class="total"><b>Total</b> <span><b>${totalPrice}.00</b></span></p>
    </div>
    <!-- end total -->
  `;
}

// Your DOMContentLoaded event here to call displayItemDetail
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve item details from sessionStorage
  const name_pic = sessionStorage.getItem('item_pic');
  const name = sessionStorage.getItem('item_name');
  const price = parseInt(sessionStorage.getItem('item_price'));
  const type = sessionStorage.getItem('item_type');

  // Call displayItemDetail to show item details
  displayItemDetail(name_pic, name, price, type);
});