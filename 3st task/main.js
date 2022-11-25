function updateNOD(n) {
  let res = n % 2 ? 1 : 2
  
  while (!(n % 2)) {
    n /= 2
  }
  
  for (var q=3; q*q<n; q+=2) {
    for (; !(n%q); n/=q) {
      res = q
    }
  }
  
  return res > n ? res : n
}

console.log(updateNOD(600851475143))
