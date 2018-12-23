function fibonacciSum() {
  let numberOne = 0
  let numberTwo = 1
  let temp = 0
  let sum = 0

  while (numberTwo < 4000000) {
    temp = numberOne + numberTwo
    numberOne = numberTwo
    numberTwo = temp
    if (numberTwo % 2 === 0) {
      sum += numberTwo
    }
  }

  return sum
}

console.log(fibonacciSum())
