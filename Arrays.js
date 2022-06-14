//1.Write a program that takes an array as input from the user and find out the product of the elements.

const Find_Prod = (array, N) => 
{
 let pro=1;
 array.forEach(function cb(N){
   pro=pro*N;
 });
 return pro;
     

};
 

//2.Write a program which takes an array as input from the user and find out the sum of the array elements.

const Find_Sum = (array, N) => 
{
  let add=0;
  array.forEach(function foo(N){
    add=add+N;
  })
  return add;

};

//3.You are given an array A containing Ninteger elements and an integer K, and your task is to return the count of occurrences of K in array A.

const findCount = (N, K, Arr) => 
{
  let occur=0;
    for(let i=0 ; i<N ; i++ ){
      if(Arr[i] === K){
         occur=occur+1;
          } 
             }
              return occur;


};
 


//4.You are given an array A containing N integer elements, and your task is to return an array B(having a size equal to 2), where B[0]contains the sum of all even elements of array A and B[1]has the sum of all odd elements of the array A.

const findEvenOdd = (N, Arr) => 
{
let oddCount = 0;
        evenCount = 0;
        let arrA = [];
        let arrB = [];
        for(let i of Arr){
          if(i%2===0){
            evenCount+=i;
          }
          else{
            oddCount+=i;
          }
        }
        arrB[0] = evenCount;
        arrB[1] = oddCount;
        return arrB;
};

//5.Write a program which takes an array as input from the user and a number.

const Find_Num = (array,N,M) => 
{
  let i=0;
  while(i<=N){
    
    if(array[i]==M){
      return "YES";
    }
  i++;
  }
  return "NO";
  
};
 
//6.You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18(18 included).
 
const highAge = (N, Arr) => 
{
  let age=[];
  let a=0;
  Arr.filter(function foo(N){
    if(N>=18){
       age[a++]= N;
    }
  })
  return age;
 
};
 
//7.You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

const Inc_Arr = (array,N) => 
{
   array.forEach (function(ele){
     console.log(ele+1);
   })
  

};

//8.You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32.If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).


const isAllPass = (N, Arr) => 
{
    let count=0;
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count=count+1;
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES";
  }
  return "NO";
};
 

//9.Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe.Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy wants you to find M.


function Unique_Shirts (arr,N) {

    let shirt="";
     let count=0;
     for(let i=0;i<N;i++){
         let sum=0;
         for(let j=0;j<N;j++){
             if(arr[i]==arr[j]){
                 sum++;
             }
 
         }
         if(sum==1){
             shirt=shirt+arr[i];
             count++;
         }
 }
 return count;
 }

 //10.Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.

 function arrayMin(arr) {
    return (Math.min(...arr))
 }

function arrayMax(arr) {
  return (Math.max(...arr))
  
}

//11.Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by A[i]. She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month M and the sum of the integers on the squares is equal to his birthday D. You must determine how many ways she can divide the chocolate.

function Birthday_Game(arr,D ,M) {
    let count = 0;
            for(let i = 0; i < arr.length - 1; i++){
                 let array1 = arr.slice(i, i+M);
                 if (array1.length === M) {
                    let sum = array1.reduce((a,b) => a + b, 0);
                    if(sum === D){
                         count=count+ 1;
                     }
                  }
            }
            return count;
   }
   
   