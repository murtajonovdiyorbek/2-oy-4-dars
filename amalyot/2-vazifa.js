class Person{
    #age;
    constructor(name, age){
        this.name=name
        this.#age=age
    }
        birthday(){
            console.log(`Tabriklaymiz! ${this.name} endi ${this.#age} yoshda`)
        }
}
const p = new Person("Nodira", "18")
p.birthday()
p.age=19
p.birthday()