'use strict';
let todo = ['デザインカンプの作成', 'データ整理', '勉強会申し込み', '牛乳買う', '歯医者に行く'];
todo.push('襲撃する');

for (let item of todo) {
  const li = `<li>${item}</li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', li);
}