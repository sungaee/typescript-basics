/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
  tag: 'ADMIN'
  name: string
  kickCount: number
}
type Member = {
  tag: 'MEMBER'
  name: string
  point: number
}
type Guest = {
  tag: 'GUEST'
  name: string
  visitCount: number
}
type User = Admin | Member | Guest

function login(user: User) {
  switch (user.tag) {
    case 'ADMIN':
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
      break
    case 'MEMBER':
      console.log(`${user.name}님 현재까지 ${user.point}점 획득했습니다.`)
      break
    case 'GUEST':
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`)
      break
  }
}

// 비동기 작업의 결과를 처리할 때도 서로소 유니온 타입을 활용할 수 있습니다.
// 예를 들어, API 요청의 결과를 처리할 때 성공과 실패를 나타내는 서로소 유니온 타입을 정의할 수 있습니다.

type LoadingTask = {
  state: 'LOADING'
}
type FailedTask = {
  state: 'FAILED'
  error: {
    massage: string
  }
}
type SuccessTask = {
  state: 'SUCCESS'
  response: {
    data: string
  }
}
type AsyncTask = LoadingTask | FailedTask | SuccessTask

function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING':
      console.log('로딩 중...')
      break
    case 'FAILED':
      console.error(task.error.massage)
      break
    case 'SUCCESS':
      console.log(task.response.data)
      break
  }
}

const loading: AsyncTask = {
  state: 'LOADING',
}

const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    massage: '서버와 연결이 끊겼습니다.',
  },
}
const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '서버로부터 데이터를 정상적으로 받았습니다.',
  },
}
