/**
 * 선언 합침
 */

// 동일한 이름으로 중복선언 할 수 있다
interface Person {
  name: string
}
interface Person {
  name: string
  age: number
}

interface Developer extends Person {
  name: 'hello'
}

const person: Person = {
  name: 'sa',
  age: 1,
}

/**
 * 모듈 보강
 */
interface Lib {
  a: number
  b: number
}
interface Lib {
  c: string
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
}
