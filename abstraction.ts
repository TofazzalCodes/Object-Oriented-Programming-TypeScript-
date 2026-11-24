abstract class Employee {
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
      abstract calculatePay(): number;
      abstract getResources(): string[];
      abstract registerEntryTime(): string
}

class Manager extends Employee {
    calculatePay(){
        return this.baseSalary + 5000;
    }
    getResources(){
        return ["dfdfdf","dfdfd"]
    }
    registerEntryTime(){
        return "12 pm"
    }
}

const manager = new Manager("Mir",25000)
console.log(manager.getResources());

