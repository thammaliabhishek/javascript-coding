// 1 .Take a number from the user and print the count of digits in that number.Note: You have to complete Find_Digits. No need to take any input.

const Find_Digits = (N) => 
{
	 let sum = 0;
         while(N !== 0){
           sum=sum+1;
           N = parseInt(N/10);
           
         }
                 return sum;
};


// 2.Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

const Find_Five = (N) => 
{
	 let i=0;
      let j=5;
      while(N>0){
        if(N%10 ==j){
          i++;
        }
          N=parseInt(N/10);
         }
         return i;

};


//3 .You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).

const findSum = (n) => {
    let sum=0;
          let a=2;
          while(a<=n){
            sum=sum+a;
            a=a+2;
          }
          return sum;
  };
  

//4 .Write a program that takes a number from the user and get the sum of the digits present in the number.

const Number_Sum = (N) => 
{
	let sum = 0;
	while(N!=0){
	  sum=sum+(N%10);
	  N=parseInt(N/10);
	}
	return sum;
};


// 5 .Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

const Print_Odd = (N) => 
{
  let i =2;
  console.log(i);
  while(i<=N){
    if(i%2!==0){
      console.log(i);
    }
    i++;
  }
};


// 6 .Write a program which ask user for no of lines and print a pattern using an asterik .

const Print_pattern = (N) => 
{
   for(let i = 1;i<=N;i++){
     let pattern= '';
     for(let j =1;j<=i;j++){
        pattern = pattern + "*";
     }
     console.log(pattern);
   }
};


// 7 .Write a program which takes  a number from user and check whether number is prime number or not a prime number.

const Prime_Check = (N) => 
{
	for(let i = 2;i<N;i++){
	  if(N%i==1){
	    return "YES";
	  }
	  else{
	    return "NO";
	  }
	}
	
};


// 8 .You are given an integer N, and your task is to print all the integers starting from 1 till N (N inclusive).

const printNumbers = (n) => {
    for(let i=1;i<=n;i++){
      console.log(i);
    }
};


// 9 .Write a program which takes a number from user and print the table.

const Print_Table = (N) => 
{
	for(let i =1;i<=10;i++){
	  result=N*i;
	  console.log(`${N} * ${i} = ${result}`);
	}
};