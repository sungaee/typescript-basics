/**
 * 함수 타입 호환성
 * 특정 함수타입을 다른 함수타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 1;

let a:A = () => 1
let b:B = () => 1

a = b // ok
// b = a  //error 'number'형식은 '1'형식에 할당할 수 없습니다.ts(2322)

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을때
type C = (a: number) => void;
type D = (a: 10) => void;

let c: C = (value) => {}
let d: D = (value) => {}
// c = d 
d = c 

type Animal = {
    name: string
}   
type Dog = {
    name: string
    color: string
}
let animalFunc = (animal: Animal) => {
    console.log(animal.name)
}
let dogFunc = (dog: Dog) => {
    console.log(dog.name)
    console.log(dog.color)
}
// animalFunc = dogFunc 
dogFunc = animalFunc 

let testFunc = (animal: Animal) => {
    console.log(animal.name)
    // console.log(animal.color)
}
let testFunc2 = (dog: Dog) => {
    console.log(dog.name)
    console.log(dog.color)
}

// 2-2. 매개변수의 개수가 다를때
type Func1 = (a: number, b: number) => void
type Func2 = (a: number) => void

let func1: Func1 = (a, b) => {}
let func2: Func2 = (a) => {}

func1 = func2
// func2 = func1 