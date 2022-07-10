// Create one function with zero parameter having a console statement;
let res= function(){
    console.log('Hi');
}
res();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a,b){
    let res=a+b;
    console.log(res);
}
sum(6,4);

// Print output: undefined
var i = 12;
 function foo () {
    console.log(i);
    var i = 7;
};
foo ();
// "Print output: 
var i = 7;
foo ();
console.log(i)//7
function foo() {
    console.log(i);//undefined
    var i = 2;
};


// Print output
// a and b are not defined;
var i = 2;
a();
b();
console.log(a);
 a = function() {
    
   i = 27;
  console.log(i);
};
b = function() {
    
    i = 4;
   console.log(i);
};
// Create one arrow function
 let arrowFunction=()=>{
    console.log('Arrow funtion');

 }
 arrowFunction();