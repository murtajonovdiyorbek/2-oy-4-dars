class Secret{
    #word;
    constructor(word){
        this.#word = word;
    }
    show(){
        console.log('salom')
    }
}
const s= new Secret("olma")
s.show()
console.log(s.word)