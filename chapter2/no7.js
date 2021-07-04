//delete
var mydata = [1,2,3,4,5];
console.log (delete mydata[0]);
console.log (mydata);

var mydata2 = {orange:1,greap:2,apple:3};
console.log (delete mydata2.apple);
console.log (mydata2);

var a = 1;
console.log (delete a);//false 
console.log (a);

b = 2;
console.log (delete b);//true

//typeof
var num = 1;
console.log (typeof num);

var str = '1';
console.log (typeof str);

var bool = true;
console.log (typeof bool);

var data3 = [1,2,3];
console.log (typeof data3);

var data4 = {1:1,2:2};
console.log (typeof data4);
