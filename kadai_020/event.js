// btnというidを持つHTML要素を取得し、定数に代入する
const button = document.getElementById('btn');
const message = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
button.addEventListener('click', () => {
  message.textContent = 'ボタンをクリックしました';
});