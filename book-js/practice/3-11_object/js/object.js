'use strict';
let jsbook = {title: 'JavaScript入門', price: 700, stock: 5};
jsbook.stock = 10;

document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price + '円';
document.getElementById('stock').textContent = jsbook.stock;