
 function reverseNumberWithLeadingZeros(number) {
    let reversedNumber = ''
    let isNegative = number < 0

    number = Math.abs(number)

    while (number > 0 || reversedNumber.length === 0) {
      let lastDigit = number % 10
      reversedNumber += lastDigit
      number = (number - lastDigit) / 10

      if (number === 0 && reversedNumber.length === 0) {
        reversedNumber += '0'
      }
    }

    if (isNegative) {
      reversedNumber = '-' + reversedNumber
    }

    return parseInt(reversedNumber)
  }

  const value = reverseNumberWithLeadingZeros(123450)

  console.log(typeof value) // Outputs: "054321"
  console.log(reverseNumberWithLeadingZeros(-123450)) // Outputs: "-054321"

















const reverseNumberWithoutanyMethod=(num)=>{
let toBeReverse = '';

  while(num !==0){
    toBeReverse = toBeReverse * 10 + (num % 10);
    num = Math.floor(num/10)
  }

  return toBeReverse;
  
}
