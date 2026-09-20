/**
 * Unknown 타입
 */

function unknownExam() {
  let a: unknown = 1
  let b: unknown = 'hello'
  let c: unknown = true
  let d: unknown = null
  let e: unknown = undefined
}

/**
 * Naver 타입
 */
function naverExam() {
  function naverFunc(): never {
    while (true) {}
  }
  let num: number = naverFunc()
  let str: string = naverFunc()
  let bool: boolean = naverFunc()
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log('hi')
  }
  let voidVar: void = undefined
}

/**
 * any 타입
 */
function anyExam() {
  let unknownVar: unknown
  let anyVar: any
  let undefinedVar: undefined
  let neverVar: never
  anyVar = unknownVar
  undefinedVar = anyVar
//   neverVar = anyVar
}
