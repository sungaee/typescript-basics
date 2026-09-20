/**
 * 기본타입간의 호환성
 */

type Animal = {
  name: string
  color: string
}
type Dog = {
  name: string
  color: string
  breed: string
}

let animal: Animal = {
  name: '기린',
  color: 'yellow',
}

let dog: Dog = {
  name: '뭉치',
  color: 'white',
  breed: '말티푸',
}
animal = dog
// dog = animal;

type ProgrammingBook = {
  name: string
  price: number
  skill: string
}

let book: Book
let programmingBook: ProgrammingBook = {
  name: '리액트',
  price: 33000,
  skill: 'reactjs',
}
book = programmingBook
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 */
type Book = {
  name: string
  price: number
}
let book2: Book = {
  name: '리액트',
  price: 33000,
  //   skill: 'reactjs',
}
let book3: Book = programmingBook
function func(book: Book) {}
func({
  name: '리액트',
  price: 33000,
  //   skill: 'reactjs',
})
func(programmingBook)
