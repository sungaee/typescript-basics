/**
 * map 메서드
 */

const arr = [1, 2, 3, 4, 5]
const newArr = arr.map((value) => value * 2)

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]))
  }
  return result
}

map(arr, (value) => value * 2)
map(['a', 'b', 'c'], (value) => parseInt(value)) // NaN, 'a', 'b', 'c'는 숫자로 변환할 수 없기 때문에 NaN이 반환됨

/**
 * forEach
 */

const arr2 = [1, 2, 3, 4, 5]
arr2.forEach((value) => console.log(value))

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}
forEach(arr2, (value) => {
  console.log(value.toFixed())
})

forEach(['a', 'b', 'c'], (value) => {
  console.log(value.toUpperCase())
})
