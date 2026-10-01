/**
 * 타입스크립트의 클래스
 */
const employee = {
    name: 'Lee',
    age: 20,
    position: 'developer',
    work(){
        console.log("일을 합니다.")
    }
}


class Employee {
    name: string;
    age: number;
    position: string;

    //생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    //메서드
    work() {
        console.log("일을 합니다.")
    }
}

// 상속받는 클래스
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee('Lee', 20, 'developer')
console.log(employeeB)

const employeeC: Employee = {
    name: 'Lee',
    age: 20,
    position: 'developer',
    work() {
        console.log("일을 합니다.")
    }
}