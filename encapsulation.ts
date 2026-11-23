// * Access Modifier
//? public
//? private
//? protected


//? readonly

class Employee {
  constructor(
      public name: string,
      private _baseSalary: number) {}
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
}

const employee = new Employee("mir", 220000);
const employee2 = new Employee("mizan", 23000);

employee.baseSalary = 30000;

console.log(employee.baseSalary);
console.log(employee.salaryWithBonus);


