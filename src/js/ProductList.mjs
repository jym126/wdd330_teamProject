function productTemplate(i, product) {
  return `
      <li class="product-card">
      <a href="product_pages/index.html?product=${product[i].Id}">
      <img
          src="${product[i].Image}"
          alt="${product[i].NameWithoutBrand}"
      />
      <h3 class="card__brand">${product[i].NameWithoutBrand}</h3>
      <h2 class="card__name">${product[i].Name}</h2>
      <p class="product-card__price">${product[i].ListPrice}</p></a>
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
  const list = await this.dataSource.getData();
  // render the list
  console.log(list)
  this.renderList('ul', list);
}

renderList(selector, list) {
  const element = document.querySelector(selector);
  // eslint-disable-next-line no-cond-assign, no-constant-condition
  for(let i = 0; i <= list.length ; i++){
  element.insertAdjacentHTML('afterBegin', productTemplate(i, list));
  }
}



}
