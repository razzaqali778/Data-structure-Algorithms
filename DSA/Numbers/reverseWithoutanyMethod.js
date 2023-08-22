
const reverseNumberWithoutanyMethod=(num)=>{
let toBeReverse = '';

  while(num !==0){
    toBeReverse = toBeReverse * 10 + (num % 10);
    num = Math.floor(num/10)
  }

  return toBeReverse;
  
}
