/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string
  age: number
}
function func(value: number | string | Date | null | Person) {
  if (typeof value === 'number') {
    console.log(value.toFixed()) // value는 number 타입
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase()) // value는 string 타입
  } else if (value instanceof Date) {
    console.log(value.getTime()) // value는 Date 타입
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`) // value는 Person 타입
  }
}
