/**
 * 인터페이스의 확장
 */

interface Animal {
    name: string
    age: number
}

interface Dog extends Animal{
    isBark : boolean
}

const dog: Dog = {
    name: "dog",
    age: 1,
    isBark: true    
}

interface Cat extends Animal{
    isScratch: boolean
}

interface Chicken extends Animal{
    isFly: boolean
}

interface DogCat extends Dog, Cat{

}

const dogCat: DogCat = {
    name: "dogcat",
    age: 2,
    isBark: true,
    isScratch: true
}