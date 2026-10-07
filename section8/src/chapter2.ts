/**
 * 맵드 타입 (타입별칭에서만 사용가능. interface에서는 사용불가)
 */

interface User {
  id: number
  name: string
  age: number
}
type PartialUser = {
  [Key in 'id' | 'name' | 'age']?: User[Key]
}

type BooleanUser = {
  [key in keyof User]: boolean
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key]
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: 'cola',
    age: 30,
  }
}

const user = fetchUser()
// user.id = 1

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {}

updateUser({
  // id: 1,
  // name: 'cola',
  age: 27,
})
