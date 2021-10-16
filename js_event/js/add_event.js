window.onload = function () {
  let e = document.getElementById('button');
  e.addEventListener('click', function () {
    console.log('イベント発生！');
  }, false);
}