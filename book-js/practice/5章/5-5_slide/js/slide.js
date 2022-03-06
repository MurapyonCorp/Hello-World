'use strict';

const images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];
let current = 0;

function chamgeImage(num) {
  if (current + num >= 0 && current + num < images.length) {
    current += num;
    document.getElementById('main_image').src = images[current];
    pageNum();
  }
};

function pageNum() {
  document.getElementById('page').textContent = `${current + 1}/${images.length}`;
}

pageNum();

document.getElementById('prev').onclick = function () {
  chamgeImage(-1)
};
document.getElementById('next').onclick = function () {
  chamgeImage(1)
};