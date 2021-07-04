//ビット演算子
var x = 7 & 3;// 111 & 011 = 011,011 = 3
console.log (x);

var y = 7 | 15;// 0111 | 1111 = 1111,1111 = 15
console.log (y);

var z = 7 ^ 15;// 0111 ^ 1111 = 1000,1000 = 8
console.log(z);

var a = 1 << 2; // 001 << 2 = 100,100 = 4
console.log (a);

var b = 4 >> 1; //100 >> 1 = 010,010 = 2
console.log (b);

var c = 10 >>> 2; // 0010 -> 1010 -> 0010 = 2
console.log (c);

var d = ~10; //~1010,0101 符号を変える -11
console.log (d);


var j = 7;
j &= 3;
console.log (j);

var f = 7;
f |= 15;
console.log (f);

var s = 1;
s <<= 2;
console.log (s);

var g = 4;
g >>= 1;
console.log (g);

var k = 10;
k >>>= 2;
console.log (k);