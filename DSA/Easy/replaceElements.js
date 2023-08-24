//1299

const replaceElements=(arr, max = -1, ans = [-1])=>{
 let arr =  arr.reverse()

  for(let i = 0; i <arr.length-1; i++){
    max = Math.max(max, arr[i])

    ans[i+1] = max
  }
  return ans.reverse()
}
