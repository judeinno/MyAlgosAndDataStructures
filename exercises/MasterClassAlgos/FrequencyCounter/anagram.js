// best case solution
function validAnagram(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  const freqCounter = {}
  for(let char of arr1) {
    freqCounter[char] = ++freqCounter[char] || 1
   }
   for (let char of arr2) {
     if (!freqCounter[char]){
       return false;
     } else {
       freqCounter[char] -= 1
     }
   }
   return true
}
