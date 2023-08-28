const fib=(n)=>{
  if (n=<2) return 1

  return fib(n-1) +fib(n-2)
}


//with cache

const fib=(n)=>{
  let memo = {}
  if( n in memo) return memo[n]
  
  if (n=<2) return 1

  memo[n] = fib(n-1, memo) +fib(n-2, memo)

  return memo[n]
}
