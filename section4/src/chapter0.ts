/**
 * 함수 타입 정의
 */
function func(a: number, b: number): number {
  return a + b
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b

/**
 * 함수의 매개변수
 */
function introduce(name: string, age: number, tail?: number) {
  console.log(`안녕하세요 ${name}입니다.`)
  if (typeof tail === 'number') {
    console.log(`제 나이는 ${tail + 2}살 입니다.`)
  }
}
introduce('홍길동', 33, 20)
introduce('홍길동', 33)

function getSum(...rest: number[]): number {
  return rest.reduce((acc, cur) => acc + cur, 0)
}
getSum(1, 2, 3, 4, 5) // 15