//数値リテラル
var int10 = 123;
var int2 = 0b100101;
var int8 = 0o732;
var int16 = 0x3ac;

console.log(int10);
console.log(int2);
console.log(int8);
console.log(int16);

var froat = 0.01e2;
console.log(froat);

//文字列リテラル
var msg = 'Hello';
window.alert(msg);

let name = 'kei';
let str = `こんにちは、${name}さん
よろしくおねがいします。`;
console.log (str);

//配列リテラル
var data = [['html','css'],'javascript'];
console.log (data[1]);
console.log (data[0][1]);

//連想配列
var profile = {myname:'kei',mysex:'man',mymail:'1234****@gmail.com'};
console.log (profile['myname']);
console.log(profile['mysex']);
console.log(profile['mymail']);




