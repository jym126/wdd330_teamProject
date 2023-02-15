import ExternalServices from '../js/ExternalServices.mjs';
import ProductList from '../js/ProductList.mjs';

// 5  Update main.js. Import in loadHeaderFooter and then use that function to load the header and footer into src/index.html
import { loadHeaderFooter, getParam } from '../js/utils.mjs';

const dataSource = new ExternalServices();
// console.log(dataSource.getData());
const category = getParam('category');
// first create an instance of our ExternalServices class.
document.getElementById('title').innerHTML = `Top products: ${category}`;

const element = document.querySelector('.product-list');
const productsList = new ProductList(category, dataSource, element);
// console.log(productsList.getData());

productsList.init();
// 5
loadHeaderFooter();
