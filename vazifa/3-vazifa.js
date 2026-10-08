class StepCounter{
    #steps;
    constructor(steps){
        this.#steps=steps
    }
    walk(n){
        this.#steps += n
    }
    show(){
        console.log(`Bugun ${this.#steps} qadam yurdingiz`)
    }
}
const sc= new StepCounter(0)
sc.walk(1000)
sc.walk(2500)
sc.show()