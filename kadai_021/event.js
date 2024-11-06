// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// HTML要素がクリックされたときに処理を実行
btn.addEventListener('click', () => {
  // 2000ミリ秒後にテキストを書き換える
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';  
  }, 2000);
});