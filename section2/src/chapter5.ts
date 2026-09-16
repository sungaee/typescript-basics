// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 10, // 숫자를 지정하면 자동으로 11, 12 할당된다. 숫자를 할당하지 않으면 0,1,2 할당된다
  USER,
  GUEST,
}
enum Language {
  korean = 'ko',
  english = 'en',
}
const user1 = {
  name: '이성애',
  role: Role.ADMIN,
  language: Language.korean,
}

const user2 = {
  name: '이뭉치',
  role: Role.USER,
}

const user3 = {
  name: '이콜라',
  role: Role.GUEST,
}

console.log(user1, user2, user3)
