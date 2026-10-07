/**
 * 템플릿 리터럴 타입 (문자열로 여러상황을 표현해야 할 때 사용)
 */

type Color = "red" | "orange" | "yellow"
type Animal = "cat" | "dog"
type ColorAnimal = `${Color}-${Animal}`

const colorAnimal1: ColorAnimal = "red-cat"
const colorAnimal2: ColorAnimal = "orange-dog"
// const colorAnimal3: ColorAnimal = "green-cat" // error 'green-cat' 형식은 'ColorAnimal' 형식에 할당할 수 없습니다.ts(2322)