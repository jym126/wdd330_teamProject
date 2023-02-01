import {getLocalStorage} from './utils.mjs';


export default class shoppingCart {
    constructor(key, selector) {
        this.key = key;
        this.selector = selector;
    }

    renderCartContents() {
        const cartItems = getLocalStorage(this.key);
        const htmlItems = [cartItems].map((item) => cartItemTemplate(item));
        document.querySelector(this.selector).innerHTML = htmlItems.join('');
    }
}


  function cartItemTemplate(item) {
    const newItem = `<li class="cart-card divider">
    <a href="../product_pages/index.html?product=${item.Id}" class="cart-card__image">
      <img
        src="${item.Image}"
        alt="${item.Name}"
      />
    </a>
    <a href="../product_pages/index.html?product=${item.Id}" class="cart-card__image">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;

    return newItem;
  }
