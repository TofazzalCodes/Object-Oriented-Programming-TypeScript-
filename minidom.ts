abstract class  UIElement {
    constructor(protected id:string) {}
    abstract render(): string;
}

class Input extends UIElement{
    constructor(
        id:string,
        private type: string,
        private placeholder: string
    ){
        super(id)
    }
    render(){
        return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`
    }
}

class Button extends UIElement{
    constructor(
        id: string,
        private label: string
    ){
        super(id)
    }
    render(){
        return `<button id="${this.id}">${this.label}</button>`
    }
}

class Form extends UIElement {
    private children : UIElement[] = [];

    appendChild(child: UIElement){
        this.children.push(child)
    }

    render(){
        const childremHtml = this.children.map((child) => child.render()).join("\n " )  
        return `<form id="${this.id}" style="border: 2px solid #65746dcc; padding:20px; display: flex; flex-direction: column; max-width:300px; border-radius:10px; gap:5px">\n ${childremHtml} \n</form>`
    }
}

const formElement = new Form("login-form")
const emailInput = new Input("mail", "email", "Enter your email")
const passInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submit-btn", "Submit");

formElement.appendChild(emailInput)
formElement.appendChild(passInput)
formElement.appendChild(submitButton)

console.log(formElement.render());

const rootElement = document.getElementById("root");

if(rootElement){
    rootElement.innerHTML = formElement.render()
}


// console.log(emailInput.render());
// console.log(passInput.render());
// console.log(submitButton.render());


