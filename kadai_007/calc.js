// 変数の定義
let num = Math.floor(Math.random() * 99) + 1;

// コンソールへ出力（確認用）
console.log(num);

// 条件式
if ((num % 3 ) === 0) {
  console.log('3の倍数です');
} 
else if ((num % 5) === 0) {
  console.log('5の倍数です');
}
else if ((num % 15) === 0) {
  console.log('3と5の倍数です');
}
else {
  console.log(num);
}
