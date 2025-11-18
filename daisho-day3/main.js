// ------------------------------
// 1. 在庫データ（JSON的な構造）
// ------------------------------

// const は「この変数に別の配列を代入し直さない」という意味の宣言です。
// 中身（配列の要素）はあとから変更してもかまいません。
const items = [
  { id: "D001", name: "オレンジジュース", price: 150, stock: 20, minStock: 5 },
  { id: "D002", name: "コーラ",           price: 150, stock: 12, minStock: 5 },
  { id: "D003", name: "お茶",             price: 120, stock: 30, minStock: 10 }
];

// HTML で <tbody id="item-list"> と書いた部分を JavaScript から取得する
const tbody = document.getElementById("item-list");

// ------------------------------
// 2. 表示用の関数 render()
// ------------------------------
// この関数は、items の内容をもとに、表の中身を作り直します。
function render() {
  // 一度、中身を空文字列にして、全部消す
  tbody.innerHTML = "";

  // items の中身を 1件ずつ取り出して tr（行）を作る
  items.forEach(item => {
    // 行を表す <tr> 要素を作る
    const tr = document.createElement("tr");

    // 在庫が少ない（stock < minStock）のときは背景色を変えるためにクラスを追加
    if (item.stock < item.minStock) {
      tr.classList.add("low-stock");
    }

    // 行の中身（セル）をテンプレート文字列でまとめて書く
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.stock}</td>
      <td>
        <button onclick="changeStock('${item.id}', 1)">＋</button>
        <button onclick="changeStock('${item.id}', -1)">−</button>
      </td>
    `;

    // 作った tr を tbody の中に追加する
    tbody.appendChild(tr);
  });
}

// ------------------------------
// 3. 在庫を変更する関数 changeStock()
// ------------------------------
// id で商品を探し、diff だけ在庫数を増減させる
function changeStock(id, diff) {
  // 該当する商品を配列 items の中から探す
  const item = items.find(i => i.id === id);
  if (!item) {
    // 見つからなかった場合は何もせずに終わる
    return;
  }

  // diff（増減分）を在庫に足す
  item.stock += diff;

  // 在庫がマイナスにならないように 0 で止める
  if (item.stock < 0) {
    item.stock = 0;
  }

  // 変更した内容を画面に反映させる
  render();
}

// ページを開いたときに、一度だけ表示を行う
render();