/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number

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