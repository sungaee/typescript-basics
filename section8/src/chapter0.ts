/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
  title: string
  content: string
  author: {
    id: number
    name: string
  }
}[]
function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`)
}
const post: PostList[number] = {
  title: '제목',
  content: '내용',
  author: {
    id: 1,
    name: 'cola',
  },
}
printAuthorInfo(post.author)


type Tuple = [number, string, boolean]

type Tuple0 = Tuple[0] // number
type Tuple1 = Tuple[1] // string
type Tuple2 = Tuple[2] // boolean
type TupNum = Tuple[number] // number | string | boolean 