function sortedSquaredArray(array) {
  if (!array.length) return 'empty array'
  return array.map(number => number * number).sort((number1, number2) => number1 - number2)
}

sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])
console.log([1, 4, 9, 25, 36, 64, 81])
sortedSquaredArray([-2, -1])
console.log([1, 4])
sortedSquaredArray([-10, -5, 0, 5, 10])
console.log([0, 25, 25, 100, 100])

function valueEncoding(char, length, value='') {
  if (length > 9) return valueEncoding(char, length-9, `${value}9${char}`)
  return `${value}${length}${char}`
}

function runLengthEncoding(string) {
  if (!string) return 'empty string'
  let data = {}
  for ( let char of string) {
    if(!data[char]) {
      data[char] = {
        char,
        length: 1,
        value: `1${char}`
      }
    }
    else {
      data[char].length ++
      data[char].value = valueEncoding(data[char].char, data[char].length)
    }
  }
  let response = ''
  Object.keys(data).forEach(char => {
    response += `${data[char].value}`
  })
  return response
}

runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")
console.log("9A4A2B4C2D")

runLengthEncoding("aA")
console.log("1a1A")

runLengthEncoding("122333")
console.log("112233")
