//1---COUNT of duplicate items
function countDupOccurence (str) {
  let charMap = new Map();
  const count = 0;
   for (const key of str) {
    charMap.set(key,count); 
   }
 
   for (const key of str) {
     let count = charMap.get(key);
     charMap.set(key, count + 1);
   }
 
 
   for (const [key,value] of charMap) {
     console.log(key,value);
   }
}   

 const k=countDupOccurence ("aaaannn");
 console.log(k)



//2--number of alphabets repeated
function countOccurences(string, word) {
    return string.split(word).length - 1;
  }
  
  var count = countOccurences('Abhia', 'b');
  console.log(count);
  
  