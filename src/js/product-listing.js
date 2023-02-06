import ProductData from '../js/ProductData.mjs';
import ProductList from '../js/ProductList.mjs';

// 5  Update main.js. Import in loadHeaderFooter and then use that function to load the header and footer into src/index.html
import { loadHeaderFooter, getParam } from '../js/utils.mjs';

const dataSource = new ProductData();
// console.log(dataSource.getData());
const category = getParam('category');
// first create an instance of our ProductData class.

const element = document.querySelector('.product-list');
const productsList = new ProductList(category, dataSource, element);
// console.log(productsList.getData());

productsList.init();
// 5
loadHeaderFooter();
