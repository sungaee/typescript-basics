/**
 * 접근 제어자
 * access modifier
 *
 */

class Employee {
  //생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string,
  ) {}

  //메서드
  work() {
    console.log('일을 합니다.')
  }
}

// 상속받는 클래스
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position)
    this.officeNumber = officeNumber
  }
  func() {
    this.age
  }
}

const employee = new Employee('Lee', 20, 'developer')
employee.position = 'designer'
