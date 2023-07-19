function multiplesOf3and5(n) {
  n=n-1;
  function sum_if_div(z,d){
    let n=Math.floor(z/d)
    return d*n*(n+1)/2
  }
  return sum_if_div(n,3)+sum_if_div(n,5)-sum_if_div(n,15);
}

console.log(multiplesOf3and5(1000));