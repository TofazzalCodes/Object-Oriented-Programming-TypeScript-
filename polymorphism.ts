// * Polymorphism: different employess respond differently to the dame method call

class Employee {
  constructor(
      public name: string,
      private _baseSalary: number) {

      }
      get baseSalary() : number {
        return this._baseSalary
      }
      get salaryWithBonus() : number {
        return this._baseSalary + 5000;
      }
      set baseSalary(newSalary: number){
        if(newSalary < 0){
            throw new Error ("Salary cannot be negative value")
        }
        this._baseSalary = newSalary;
      }
      calculatePay(taxRate: number){
        return this.baseSalary - this.baseSalary * taxRate;
      }
}

class Manager extends Employee{
    override calculatePay(){
        return this.baseSalary + 5000;
    }
}

class Developer extends Employee {
     constructor(
      name: string,
      _baseSalary: number,
      public type: string) {
        super(name, _baseSalary)
      } 
      override calculatePay(){
        return this.baseSalary + 3000;
      }  

}
const employee = new Employee("mir",20000);
const manager = new Manager("amir", 30000);
const developer = new Developer("Towfique", 25000, "developer")

console.log(manager.calculatePay());
console.log(employee.calculatePay(0.1));
console.log(developer.calculatePay());



