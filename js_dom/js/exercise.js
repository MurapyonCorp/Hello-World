// 「ノードを追加」のレクチャーで学習したコードを改修、
// ユーザーがテキストボックスに文字列を入力後
// ユーザーがボタンを押すと
// リストの最後の項目として文字列が追加されるプログラムを書いてみましょう。

// 補足
// テキストボックスの要素を取得するには、getElementByIDを利用できる。

function append() {
  // テキストボックスに入力された要素を取得
  let element = document.getElementById('textBox');
  // li要素を生成
  let li = document.createElement('li');
  // テキストノードを生成
  let text = document.createTextNode(textBox.value);
  // liタグの要素に、テキストノード textを追加
  li.appendChild(text);
  let lists = document.getElementById('lists');
  // idがlistsのulタグに、liを追加。具体的には<li>追加文字列</li>が、追加される。
  lists.appendChild(li);
}
