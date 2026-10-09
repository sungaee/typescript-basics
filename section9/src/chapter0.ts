/**
 * 조건부 타입
 */

type A = number extends string ? string : number

type ObjA = {
  a: number
}
type ObjB = {
  a: number
  b: number
}
type B = ObjB extends ObjA ? number : string // ObjB는 ObjA를 상속받기 때문에 B는 number가 된다.

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number

let varA: StringNumberSwitch<number> // varA는 string 타입이 된다.
let varB: StringNumberSwitch<string> // varB는 number 타입이 된다.


// 함수 오버로딩 
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
    if(typeof text === 'string'){
        return text.replaceAll(' ', '')
    } else {
        return undefined 
    }   
}

let result = removeSpaces('hello world !')
result.toUpperCase()

let result2 = removeSpaces(undefined)
