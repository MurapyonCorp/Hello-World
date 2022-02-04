'use strict';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const hour = now.getHours();
const minite = now.getMinutes();

let ampm = '';
if (hour < 12) {
  ampm = 'a.m.';
} else {
  ampm = 'p.m.';
}
const output = `${year}/${month + 1 }/${day} ${hour % 12}:${minite}${ampm}`;
document.getElementById('time').textContent = output;