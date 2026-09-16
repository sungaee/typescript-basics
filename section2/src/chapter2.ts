//배열
let numArr: number[] = [1, 2, 3]

let strArr: string[] = ['hi', 'im', 'amy']

let boolArr: Array<boolean> = [true, false, true]

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, 'hello']

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
]

//튜플
//길이와 타입이 고정된 배열
let tuple1: [number, number] = [1, 2]
let tuple2: [number, string, boolean] = [1, '2', true]

const users: [string, number][] = [
  ['김이박', 1],
  ['박이박', 2],
  ['윤이박', 3],
//   [4, '오이박'], //순서를 지키는게 중요할때 튜플타입을 이용해서 값을 잘못 넣는 경우를 방지할 수 있다.
]
