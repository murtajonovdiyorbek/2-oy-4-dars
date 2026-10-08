class Box{
    #items=0;
    constructor(items){
        this.#items=items
    }
    put(){
        this.#items++
        console.log(`Qutiga narsa solindi. Ichida: ${this.#items} ta`)
    }
    take(){
        if(this.#items===0){
            console.log('Quti bo`sh')
        }else{
            this.#items--
            console.log(`Qutidan narsa olindi. Ichida: ${this.#items} ta`)
        }
    }
}
const b= new Box(0)
b.take()
b.put()
b.put()
b.take()