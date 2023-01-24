const triplet = function fn(n) {
  const ceil = n / 2;
  for (let a = 1, b = 1; a <= ceil;) {
    let c = Math.sqrt(a * a + b * b);
    if (a + b + c === n) { 
      return a * b * c; 
    }
    if ((b += 1) > ceil) { 
      a += 1; b = 1; 
    }
  }
};

console.log(triplet(1000));