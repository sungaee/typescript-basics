/**
 *  타입 단언
 */

type Person = {
  name: string
  age: number
}
let person = {} as Person // Person타입으로 간주해라
person.name = 'cola'
person.age = 7

type Dog = {
  name: string
  color: string
}
let dog = {
  name: '뭉치',
  color: 'white',
  breed: '말티푸',
} as Dog

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never
let num2 = 10 as unknown

let num3 = 10 as unknown as string

/**
 * const 단언
 */
let num4 = 10 as const //const로 선언한것과 동일한것으로 만듬
let cat = {
  name: '고양이',
  color: 'yellow',
} as const // 모든 프로퍼티를 readonly로 만듬

// cat.name = ""

/**
 * Non Null 단언 !
 */
type Post = {
  title: string
  author?: string
}
let post: Post = {
  title: '게시글1',
  author: 'cola',
}
const len: number = post.author!.length // ! 붙이면 이값이 null이 아닐거라는 의미
