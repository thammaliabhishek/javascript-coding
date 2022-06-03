//1.You are provided with two numbers Aand B. Your task is to add these two numbers.
const AddTwoNumbers = (a,b) => {
    let result=a+b;
    return result;
}
 

//2.You are given two number first as A and second as B and check if both conditions (A<10 and A>B) are satisfied or not with the help of operators.

const Is_Valid = (a,b) => {
    return (a<10) && (a>b)?"true":"false";
}

//3.You are given two numbers A and B. You need to do the following checks:
//1.if both are divisible by 10 console true.
//2.if both are not divisible by 10 console false.
//3.if one of them only is divisible by 10 console true.Use operator to do this

const Check = (A, B) => 
{
 return ((A%10==0) || (B%10==0)) || ((A%10==0) && (B%10==0))?"true":"false";
 
}

//4.You are provided a four digit number N only. Your task is to print out the first digit of that number.

const First_Digit = (n) => {
    while(n>=10)
    n/=10;
    return Math.floor(n);
    }
    
    
//5.You are provided a four digit number N only. Your task is to print out the last digit of that number.

const Last_Digit = (n) => {
    n=n%10;
    return n;
 };
 
 //6.You are provided with two numbers A and B where A as  divisor and B as  dividend.Your task is find the remainder.

 const Find_the_remainder = (a,b) => {
    let result=b%a;
    return result;
  };
  
//7.You are provided with two numbers A and B. Your task is to multiply these two numbers.

const Multiply_two_number = (a,b) => {
    let result=a*b;
    return result;
  };


//8.  Shyam has got his marks in three subjects as A,B and C(out of 100).Write a program to calculate his total marks and his total percentage.Note: You have to complete Sum and Average function. No need to take any input.

const Sum = (A, B, C) => 
{
 let res1=(A+B+C);
 return res1;
}

const Average = (A, B, C) => 
{
  sum=(A+B+C)/3;
 return sum;
}
