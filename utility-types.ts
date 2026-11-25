// * utility types 

// * Partial

interface User{
    id: string ;
    name: string;
    email: string;
}

// type PartialUser = Partial<User>

const updateProfile = (id: string, data: Partial<User>) => {

}

// * Required

interface Config {
    apiKey?: string;
    timeOut?: number;
}

const initialize = (config: Required<Config>) => {
    // some logic
}

initialize({apiKey: "addfd", timeOut: 30000})


// * Pick

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview : ProductPreview = {
    name: "ABC",
    description: "Efdfdf"
}

// * Omit 

interface Employee  {
    id: number;
    name: string;
    salary: 20000;
    nid: "123567"
}

type PublicEmployee = Omit<Employee, "salary" | "nid">

const directoryEntry: PublicEmployee = {
    id: 42,
    name: "Bob",
}

// * Record

type Environment = "development" | "staging" | "production" ;


const apiUrls: Record<Environment,string> = {
        development: "http://localhost:3000",
        staging: "https://staging.api.com",
        production: "https://api.com"
}

