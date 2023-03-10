import { renderListWithTemplate } from './utils.mjs';

function productTemplate(product) {
  return `
      <li class="product-card">
      <a href="../product_pages/index.html?product=${product.Id}">
      <img
          src="${product.Images.PrimarySmall}"
          alt="${product.NameWithoutBrand}"
      />
      <h3 class="card__brand">${product.NameWithoutBrand}</h3>
      <h2 class="card__name">${product.Name}</h2>
      <p class="product-card__price">${product.ListPrice}</p></a>
      </li>
    `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData(this.category);
    // render the list
    // console.log(list);
    renderListWithTemplate(productTemplate, this.listElement, list);
  }
}
