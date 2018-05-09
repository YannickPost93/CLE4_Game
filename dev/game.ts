class Game {
    cars:Car[]
    bicycles:Bicycle[]

    constructor(){
        console.log("new game created!")
        this.cars = []
        this.bicycles = []

        for (let i = 0; i < 10; i++) {
            let c = new Car()
            this.cars.push(c)
            let b = new Bicycle()
            this.bicycles.push(b)
        }  
    }
}

window.addEventListener("load", () => new Game())