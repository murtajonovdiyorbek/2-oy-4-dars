class Game{
    #score=0;
    constructor(player, score){
        this.player=player
        this.score=score
    }
    win(){
        this.#score+=10
    }
    lose(){
        this.#score-=5
    }
    show(){
        console.log(`${this.player}: ${this.#score} ochko`)
    }
}

const g= new Game('Sardor')
g.win(10)
g.win(20)
g.lose(15)
g.show()