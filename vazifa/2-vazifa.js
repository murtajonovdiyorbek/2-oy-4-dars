class Post{
    #likes=0;
    constructor(title, likes){
        this.title=title
        this.#likes=likes
    }
    like(){
        this.#likes++
    }
    show(){
        console.log(`${this.title} ${this.#likes} ta like`)
    }
}
const p = new Post('Mening birinchi postim:', 1)
p.like()
p.like()
p.show()
