'use strict';

//if命令
var x = window.prompt('xの値を入力');
if(x >= 20){
    if(x < 30){
        console.log ('xは、20以上かつ、30未満です。');
    }else{
        console.log ('xは、30以上です。');
    }
}else if(x >= 10){
    console.log ('xは、10以上です');
}else{
    console.log ('xは、10未満です。');
}

//switch命令
var animals = 'cat';
switch(animals){
    case 'cat':
        console.log ('猫');
        break;
    case 'dog':
        console.log ('犬');
        break;
    case 'bird':
        console.log ('鳥');
        break;
    default:
        console.log ('animals');
        break;
}

//while
var y = 5;
while(y < 5){
    console.log (`${y}回目です。`);
    y++;
}

//do...while
var z = 5;
do{
    console.log (`${z}回目です。`);
    z++;
}while(z < 5);

//for
for(var a = 10; a >= 0; a--){
    console.log (`カウントダウン「${a}」`);
}

//for...in
var data = {apple:150,orange:110,grape:200};
for(var key in data){
    console.log (key + 'は、' + data[key] + '¥');
}

//for...of
var data2 = ['apple','orange','grape'];
Array.prototype.hoge = function() {}
for (var val of data2){
    console.log (val)
}

//break
var s = 0;
for (var j = 0; j < 100; j++){
    s += j;
    if(s > 1000){break;}
}

console.log ('1000をこえるのは' + j + '回目です');

//continue
for (var i = 0; i <= 100; i++){
    if(i % 2 === 0){continue;}
    console.log (i)
}



for(var b = 1; b < 10; b++){
    for(var c = 1; c < 10; c++){
    var d = c * b;
    if(d > 30){break;}
    document.write(d + '&nbsp');
    }
    document.write('<br />');
}

kuku:for(var b = 1; b < 10; b++){
    for(var c = 1; c < 10; c++){
    var d = c * b;
    if(d > 30){break kuku;}
    document.write(d + '&nbsp');
    }
    document.write('<br />');
}

var int = 1;
try{
    int *= p;
}catch(e){
    console.log(e.message);
}finally{
    console.log('完了')
}






































