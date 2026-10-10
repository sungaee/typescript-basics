/**
 * 분산적인 조건부 타입
 */

// type StringNumberSwitch<T> = T extends number ? string : number
type StringNumberSwitch<T> = [T] extends [number] ? string : number
// 분산적 조건부 타입으로 처리되는 기본동작을 막는방법
// [T] extends [U]`와 같이 `extends` 키워드의 양쪽에 타입을 대괄호로 감싸면 조건부 타입의 분산적인 동작이 일어나지 않음. 
// 유니온 타입 전체를 하나로 판단하게 된다.



let varA: StringNumberSwitch<number> // varA는 string 타입이 된다.
let varB: StringNumberSwitch<string> // varB는 number 타입이 된다.

let varC: StringNumberSwitch<number | string>

let varD: StringNumberSwitch<boolean | number | string>

/**
 * 예제
 */

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>


type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>