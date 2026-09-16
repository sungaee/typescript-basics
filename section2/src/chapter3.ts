

// object
let user: {
  id?: number
  name: string
} = {
  id: 1,
  name: '이성애',
}

// readonly -> 절대 값이 바뀌면 안될때
let config:{
    readonly apiKey: string
} = {
    apiKey : 'My API KEY'
}