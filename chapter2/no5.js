//代入演算子
var x = 10;
console.log (x);//10

x += 3;
console.log (x);//13

x -= 4;
console.log (x);//9

x *= 2;
console.log (x);//18

x /= 2;
console.log (x);//9

x %= 4;
console.log (x);//1

var data1 = ['Python','Java','Javascript','PHP'];
var [x0,x1,x2,x3] = data1;

console.log (x0);//Python
console.log (x3);//PHP

var profile = {myname:'kei',mysex:'man',mymail:'1234****@gmail.com',
 other: {myschool:'hikarigaoka',myhobby:'baseball'}};
var {myname,mysex,myage = 'なし',other:{myschool}} = profile;

console.log (myname);//kei
console.log (mysex);//man
console.log (myage);//なし
console.log (myschool);//hikarigaoka

var {myname:namae,mysex:seibetsu} = profile;

console.log (namae);//kei
console.log (seibetsu);//man



//比較演算子

console.log (3 == 3);//true
console.log (2 > 3);//false
console.log (8 >= 5);//true
console.log (10 < 9);//false
console.log (10 <= 10);//true
console.log (1 === 1);//true
console.log (1 != 1);//false 
console.log (1 !== '1');//true

var a = 10;
console.log ((a >= 20) ? 'yes':'no');//no

mydata = [0,1,2,3,4,5];
mydata2 = mydata;
console.log (mydata == mydata2);//true

console.log (false == 0);
console.log (null == undefined);
console.log (1 == '1');


//論理演算子
console.log (1 == 1 && 2 == 2);//true
console.log (10 == 8 || 2 == 2);//true 
console.log (!(10 >= 20))//true