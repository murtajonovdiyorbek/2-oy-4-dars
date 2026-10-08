class Tv{
    #volume=10;
    constructor(volume){
        this.#volume=volume
    }
    up(){
        this.#volume+=10
    }
    down(){
        if(this.#volume>0){
            this.#volume-=10
        }
    }
    show(){
        console.log(`Ovoz: ${this.#volume}`)
    }
}
const tv = new Tv(10)
tv.up()
tv.up() 
tv.show()
tv.down() 
tv.down() 
tv.down()
tv.down() 
tv.show()
