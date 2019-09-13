const { performance } = require('perf_hooks');

 function addUpto1(n) {
   let total = 0;
   for(let i = 1; i <= n; i++) {
     total += i;
   }
   return total
 }

 let t1 = performance.now()
 addUpto1(100000000)
 let t2 = performance.now()
 console.log(`Time elapsed func 1: ${(t2 - t1)/1000} seconds`)

 function addUpto2(n) {
  return n * (n + 2) /2;
}

let t3 = performance.now()
addUpto2(100000000)
let t4 = performance.now()
console.log(`Time elapsed func 2: ${(t4 - t3)/1000} seconds`)
