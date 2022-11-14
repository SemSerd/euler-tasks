let x = 1;
let y = 2;
let count = 0;

while (x < 4000000) {
  if (x % 2 === 0) {
    count += x;
  }
  x = y;
  y = x + y;

}
console.log(count);