class Lamp{
    #isOn = false;
    constructor(isOn){
        this.#isOn = isOn;
    }
    turnOn(){
        this.#isOn = true;
    }
    turnOff(){
        this.#isOn = false;
    }
    show(){
        console.log(`${this.#isOn ? 'Chiroq yoniq' : 'Chiroq ochiq'}`);
}}
const l = new Lamp()
l.show()
l.turnOn()
l.show()
l.turnOff()
l.show()