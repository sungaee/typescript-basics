// 타입별칭
type User = {
  id: number
  name: string
  nickname: string
  birth: string
  bio: string
  location: string
}

let user: User = {
  id: 1,
  name: '이성애',
  nickname: 'amy',
  birth: '1993.01.21',
  bio: '안녕',
  location: '인천시',
}

// 인덱스 시그니처 (규칙을 이용하여 타입정의)
type CountryCodes = {
  [key: string]: string
}
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
  [key: string]: number
  Korea: number
}
let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
}
