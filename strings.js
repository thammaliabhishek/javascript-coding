//1 You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.Note: You have to complete countCharacters function. No need to take any input.
const countCharacters = (S) => 
{
    let I=[];
  let countJ=0;
  let countI=0;
  for(let i=0; i<S.length; i++)
  {
    if('A' ==S.charAt(i))
    {
      countJ+=1;
      
    }
    else if ('D' == S.charAt(i))
    {
      countI+=1;
      
    }
    
  }
  I.push(countJ);
  I.push(countI);
  return I;
};


//2.Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S , she decided to write a code that finds out the count of characters that occur more than once in the string.

var Count_Occ = (s) => 
{
     let Arr = s.split("").sort();
    var A;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      A=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          A=acc+1;
        }
        return A;
      }, 0);
      map1.set(`${Arr[i]}` , A);
    }
    let B = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      B.push(key + "" + value);
    }
    
    });
    return (B.join(""));
};
 

//3.You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.

var Count_Vowels= (S) => 
{
     return S.match(/[aeiou]/gi).length  
};
 

//4.You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the concatenation of both the given strings. 

var Concatenate_Strings = (S1, S2) => 
{
      let conca=(S1 + S2);
    return conca;
};
 

//5.You are given a string S, and your task is to return the length of the string S.Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input.

const findLength = (S) => 
{
    return S.length;
};
 

//6.You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. 

var Game_Winner = (S) => 
{
  let A= S.match(/[A]/gmi).length;
  let B= S.match(/[D]/gmi).length;
  if(A > B)
  {
    return 'Aditya';
  }
   else if(A < B)
  {
    return 'Danish';
  }
  else
  {
    return 'Draw';
  }
}
 

//7.You are given two strings S and P, and your task is to concatenate them and return the concatenated string.Note: You have to complete joinStrings function. No need to take any input.

const joinStrings = (S, P) => 
{
   return S+P ; 
};
 
//8.You are given a string S, Your task is to check wether the given string is a Palindrome or not.

var Palin_Check = (str) =>
{
	  return (str.split("").reverse().join(""))===str?"True":"False";
}

//9.You are given a string S, Your task is to Reverse the string.String can contain both upppercase lowercase letters. 

var Reverse_String = (str) => 
{
    return str.split("").reverse().join("");  
};
 

//10.You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.

var String_Match = (S1,S2) => 
{
     return ((S1===S2?"YES":"NO"));  
};
 

//11.You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.

var Replace = (S, pattern , text) => 
{
    return S.replace(pattern,text);   
};

//12.You are given a string S, Your task is to split the string with respect to spaces.Note: You have to complete Split_the_String function. No need to take any input.

var Split_the_string = (S) => 
{
  return S.split(" ");
        
};
 
//13.You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of consonants in the given string.

var Count_Vowels= (S) => 
{
     return S.match(/[aeiou]/gmi).length 
};
var Count_Consonants= (S) => 
{
     return S.match(/[^aeiou]/gmi).length;    
};
 
