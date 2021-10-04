// リストとボタンを設置
// ボタンをクリックすると
// リストの子要素が最後のものから削除される
function remove() {
  let parentElement = document.getElementById('lists');
  let elements = parentElement.getElementsByTagName('li');
  let removeIndex = elements.length -1;
  parentElement.removeChild(elements[removeIndex]);
}