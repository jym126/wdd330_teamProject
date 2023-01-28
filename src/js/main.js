import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

const dataSource = new ProductData('tents');
// console.log(dataSource.getData());

const element = document.querySelector('.product-list');
const productsList = new ProductList('Tents', dataSource, element);
// console.log(productsList.getData());

productsList.init();
