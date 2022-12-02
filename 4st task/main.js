const getPalindrome = () => {
  const palindrome = (str) => {
    return str === (() => str.split("").reverse().join(""))(str);
  };
  for (let x = 999; x > 900; --x) {
    for (let y = x; y > 900; --y) {
      if (palindrome((x * y).toString())) return x * y;
    }
  }
};
console.log(getPalindrome());
