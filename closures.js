
//Q.1. find output-
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = counter();
alert(counter());//1
alert(counter());//2
alert(counter());//3
alert(counter());//4

//Q.2.

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);//1
  }
  console.log(count);//0
})();

//Q.3.

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); //  3 times 3
    }, 1000);
  }

//Q.6.Print Output

var a = 12;
(function () {
  alert(a);//12
})();

//Q.7.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);//12
  };
})();
x();

//Q.8.

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +//123
        "innerArg = " + innerArg + "\n" +//456
        "outerVar = " + outerVar + "\n" +//a
        "innerVar = " + innerVar + "\n" +//b
        "globalVar = " + globalVar);//xyz
    
    })(456);//outerArg
})(123);//innerArg

//Q.3.  Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function outerLength(length){
   function innerBreath(breadth){
       console.log(`Area of rectangle is ${length * breadth} square meter`)//Area of rectangle is 18000 square meter
   }
   innerBreath(90);//breadth
}
outerLength(200);//length


//Q.4.Take a variable in outer function and create an inner function to increase the counter every time it is called

function outsideFun(){
    let  i = 0;
     return function insideFun(){
         i++;
         console.log(i);
         
    };
   
}

let j = outsideFun();
j();//1
j();//2
j();//3
j();//4
j();//5