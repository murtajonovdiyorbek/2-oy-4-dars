class Phone{
    #battery=100;
    constructor(model, battery){
        this.model=model
        this.#battery=battery
    }
    use(n){
        if(this.#battery<n){
            console.log("Batareya yetarli emas")
        }
        else{
            this.#battery-=n
        }
    }
    charge(){
        this.#battery=100
        console.log("Telefon zaryadlandi")
    }
    show(){
        console.log(`${this.model}: ${this.#battery}`)
    }
}
const ph= new Phone("Redmi", 100)
ph.use(30)
ph.show()
ph.use(90)
ph.charge()
ph.show()