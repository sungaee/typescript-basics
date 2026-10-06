/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K
  value: V
}

let keyPair: KeyPair<string, number> = {
  key: 'name',
  value: 25,
}

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['hello'],
}

/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number
}

let numberMap1: NumberMap = {
  key: 1,
  key2: 2,
  key3: 3,
}

interface Map<V> {
  [key: string]: V
}
let stringMap: Map<string> = {
  key: 'hello',
  key2: 'world',
}

let booleanMap: Map<boolean> = {
  key: true,
}

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V
}
let stringMap2: Map2<string> = {
  key: 'hello',
}


/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생유저 / 개발자유저
 */

interface Student {
    type: 'student'
    school: string
}

interface Developer {
    type: 'developer'
    skill: string
}

interface User<T> {
    name: string
    profile: T
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school
    console.log(`${school}에 다닙니다.`)
}

const developerUser : User<Developer> = {
    name: "이성애",
    profile : {
        type: 'developer',
        skill: 'typescript'
    }
}

const studentUser : User<Student> = {
    name: "이성애",
    profile : {
        type: 'student',
        school: '서울대학교'
    }
}