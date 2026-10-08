class Score {
    #ball = 0;
 constructor(name, ball) {
 this.name = name
 this.#ball = ball
 }
 add(n) {
 this.#ball += n
 }
 show() {
 console.log(`${this.name}: ${this.#ball} ball`)
 }
}
const s = new Score('Laylo', 70)
s.ball = 1000 
s.add(5)
s.show()
