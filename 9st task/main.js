console.time('TIME')
const triplet = function fn(n) {
  const ceil = n / 2;
  for (let a = 1, b = 1; a < ceil;) {
    let c = Math.sqrt(a * a + b * b);
    if (a + b + c === n) { 
      return a * b * c; 
    }
    b += 1;
    if (b > ceil) { 
      a += 1; b = 1; 
    }
  }
};

console.log(triplet(1000));
console.timeEnd('TIME')