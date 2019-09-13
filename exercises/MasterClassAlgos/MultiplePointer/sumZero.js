import { FORMERR } from 'dns';

// Naive solution o(n^2)
function sumZero1(arr) {
  for (let i=0; i < arr.length; I++) {
    for( let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
   }
}

// Mutiple pointer
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right]
    if(sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++
    }
  }
}
