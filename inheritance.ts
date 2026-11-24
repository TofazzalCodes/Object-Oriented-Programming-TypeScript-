
class Employee {
  constructor(
      public name: string,
      protected _baseSalary: number) {}

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

      describe(): string {
        return `${this.name} earns ${this.baseSalary}`
      }
}

class Manager extends Employee {
   
    constructor( name: string , _baseSalary: number, public teamMemberCount: number){
        super(name, _baseSalary)
    }

    describeWork(): string{
        return `${this.name} manages ${this.teamMemberCount} people`
    }

    describeManager(): string {
        return `${this.name} earns ${this._baseSalary}`
    }
}

const employee = new Employee("mir", 220000);
const employee2 = new Employee("mizan", 23000);

const manager = new Manager("towfique",3000,4)
console.log(manager.describeWork());


