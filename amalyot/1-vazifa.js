class Private{
    #phone;
    constructor(name, phone){
        this.name = name;
        this.#phone = phone;
    }
    show(){
        console.log(`Name: ${this.name}, Phone: ${this.phone}`);
    }
}
const c = new Private('Aziz', '+998 90 123 45 67')
c.show()
console.log(c.phone)