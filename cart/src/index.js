import faker from 'faker';

// let products = '';

// for(let i=0; i< 5; i++){
//     const name = faker.commerce.productName(); 
//     products += `<div>${name}</div>\n`;
// }
// console.log(products);
// document.querySelector('#dev-products').innerHTML = products;

const msg = 'You have 0 item(s) in your cart';
document.querySelector('#dev-cart').innerHTML = `<div>${msg}</div>`;