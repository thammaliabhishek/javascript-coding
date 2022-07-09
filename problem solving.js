//1.PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.


var Minimal_Angle = (h, m) => 
{
     if (h == 12) h = 0;
  if (m == 60) {
    m = 0;
    h += 1;
    if (h > 12) h = h - 12;
  }

  let hour_angle = 0.5 * (h * 60 + m);
  let minute_angle = 6 * m;

  let angle = Math.abs(hour_angle - minute_angle);

  angle = Math.min(360 - angle, angle);

  return angle;
  
};
 


//2.Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not.


 
var Check_Leap = (year) => 
{
  if(year%4===0){
    if(year%100===0){
      if(year%400===0){
        return "Leap Year";
      }else{
        return "Non Leap Year";
      }
    }else{
      return "Leap Year";
    }
     }else{
       return "Non Leap Year"
}                  
  

};
 
//3.Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself

 
var Perfect_Check = (N) => 
{
     if(N===1){
            return "YES"
          }else{
            let sum = 0;
            for(let i = 1;i< N;i++){
              if(N%i === 0){
                sum += i
              }
            }
            if (sum === N){
              return "YES"
            }else{
              return "NO"
            }
          }    
        
};
 
//4.Write a program which takes a numebr N as input from the user and You need to reverse the number.

 
var Reverse_Number = (N) => 
{
  let res = 0;
  while (N) {
    let dig = N % 10;
    res = res * 10 + dig;
    N = Math.floor(N / 10);
  }
  return res;

};
 
//5.You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.


var Substring_Check = (S1, S2) => 
{
     return S1.includes(S2)?"YES":"NO" 
};
 

