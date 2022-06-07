// 1 .Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.

const Calculator = (A, B, C) => 
{
	switch(A){
	  case '+' :
	         return B+C
	         break;
	  case '-' :
	        return B-C
	         break;
	   case '*':
	         return B*C
	         break;
	   case '/':
	         return B/C
	         break;
	   default :
	         return "invalid"
	         break;
	}
    
};

// 2.Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.

const Check_divisibility = (N) => {
  
    if((N%6==0) && (N%9==0)){
      return "Divisible by both";
    }  
    else{
      return "Not Divisible by both";
    }
    
    
  }
  
// 3.  You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.

const isEligible = (a) => {
    if(a>=18){
      return "Eligible for Voting";
    }
    else{
      return "Not Eligible for Voting";
    }
}


// 4.PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values X and Y and asks you to find the relation between them.

const findRelation = (x,y) => {
    if(x<y){
      return x + ' is smaller than ' + y
    }  
    else if(x>y){
      return x + ' is greater than ' + y 
    }
    else if(x==y){
      return x + ' is equal to ' +y
    }
   
  }
  
// 5.  Your school has the following grading system based upon the marks(M) obtained by a student:

const findGrades = (a) => {
    switch(true){
      case a<=10:
        return 'E';
        
        
      case a>=11 && a<=20:
        return 'D';
        
        
      case a>=21 && a<=30:
        return 'C';
        
      
      case a>=31 && a<=40:
        return 'B';
        
     
      case a>=41 && a<=50:
        return 'A';
        
       
      default:
        return "invalid";
        
        
    }
  };

  
// 6.  You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.

const getValue = (a) => {
    switch(true){
       case(a === "p" || a === "P"):
         return 'PrepBytes';
         break;
       case(a === "z" || a === "Z"):
         return 'Zenith';
         break;
       case(a === "e" || a === "E"):
         return 'Expert Coder';
         break;
       case(a === "d" || a === "D"):
         return 'Data Structure';
         break;
       default:
         return 'Invalid';
         break;
     }
};

//7 .Take three numbers and print the largest number among them if all of three are same print  −1.

const Max_out_of_three = (A,B,C) => {
    if(A > B && A > C){
     return A;
     }
     else if(B > A && B > C){
       return B;
     }
     else if(C > A && C > B){
       return C;
     }
     else{
       return -1;
     }

};

//8 .You are given 3 distinct integers X,Y,and Z,and your task is to find and return the second smallest integer among the three provided integers.

const findSndSmallest = (x,y,z) => {
    if((x<y && y<z) || (x>y && y>z))
    {
       return y;
     }
     else if((y<x && x<z) || (y>x && x>z))
     {
       return x;
     }
     else
     {
       return z ;
     }
};


//9 .Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

const Triangle_Check = (A,B,C) => {
    if((A > 90 && B < 90 && C < 90) || (B > 90 && A < 90 && C < 90) || (C > 90 && B < 90 && A < 90)) {
     return 'obtuse';
     }
     else{
       return 'acute';
     }
 };

 