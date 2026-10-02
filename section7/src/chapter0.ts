/**
 * 제네릭
 */

// 제네릭 함수 (반환값 타입을 가변적으로 정의 할 수 있다)
function func<T>(value: T): T {
  return value
}

let num = func(10)
let bool = func(true)
let str = func('hello')
let arr = func<[number, number, number]>([1, 2, 3])
