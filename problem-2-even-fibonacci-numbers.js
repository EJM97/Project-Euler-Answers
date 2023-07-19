function fiboEvenSum(n) {
  let pre = 1;
  let curr = 2;
  if (n <= 1) {
    return 0;
  }
  let sum = 2;
  for (let i = 3; i <= n && curr <= n; i++) {
    const temp = pre;
    pre = curr;
    curr = temp + curr;
    if (curr % 2 == 0) {
      sum += curr;
    }
  }
  return sum;
}
