import { mount } from 'products/ProductsIndex'
import 'cart/CartShow'

console.log('inside container');
const el = document.querySelector('#my-products');
mount(el);