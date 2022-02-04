'use strict';
const agree = Cookies.get('cookie-agree');
const panel = document.getElementById('privacy-panel');
if (agree === 'yes') {
  document.body.removeChild(panel);
} else {
  document.getElementById('agreebtn').onclick = function () {
    Cookies.set('cookie-agree', 'yes', {expires: 7});
    document.body.removeChild(panel);
  };
}

// クッキー削除（テスト用）
document.getElementById('testbtn').onclick = function () {
  Cookies.remove('cookie-agree');
};