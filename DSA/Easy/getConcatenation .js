//1929


const getConcatenation(arr)=>{
  let res = []

  for(let i=0; i<arr.length *2;i++){
    res.push(arr[i% arr.length])
  }

  return res
}

////////////////////////////////////

function getConcatenation(arr){
  let res = []

  for(num of arr){
    res.push(num)
  }

  for(num of arr){
    res.push(num)
  }

  return res
}
