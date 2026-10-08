class Cinema{
    #tickets;
    constructor(film, tickets){
        this.film = film;
        this.#tickets = tickets;
    }
    buy(){
        if(this.#tickets===0){
            console.log('Chiptalar tugadi')
        }else{
            this.#tickets--;
            console.log(`Chipta sotib olindi. ${this.film}. Qoldi: ${this.#tickets}`)
        }
    }
}
const c = new Cinema('Shrek', 2)
c.buy()
c.buy()
c.buy()
