let count = 0;
let value = 0;
console.time('FirstWay')
while( value < 1000) {
  if (value% 3 === 0 || value% 5 === 0 ) {
    count = count + value;
  }
  value++;
}
console.log(count);
console.timeEnd('FirstWay');