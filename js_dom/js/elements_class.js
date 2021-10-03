// ボタンをクリックしたら、class名が’foo’の要素を取得し、
// その内容（テキスト）をコンソールに出力する。
function showElements() {
  let elements = document.getElementsByClassName('foo');
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerText);
  }
}