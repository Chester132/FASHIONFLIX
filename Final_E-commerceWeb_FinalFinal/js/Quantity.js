document.addEventListener('DOMContentLoaded', function () {
  const decreaseButton = document.querySelector('.decrease');
  const increaseButton = document.querySelector('.increase');
  const quantityElement = document.querySelector('.quantity');
  const priceElement=document.querySelector('.item-price');

  const originalPrice = parseFloat(priceElement.textContent);

  decreaseButton.addEventListener('click', function () {
      let currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 1) {
          currentQuantity--;
          quantityElement.textContent = currentQuantity;
          priceElement.textContent = (originalPrice * currentQuantity).toFixed(2);
      }
  });

  increaseButton.addEventListener('click', function () {
      let currentQuantity = parseInt(quantityElement.textContent);
      currentQuantity++;
      quantityElement.textContent = currentQuantity;
      priceElement.textContent = (originalPrice * currentQuantity).toFixed(2);
  });
});
