class Game {
    
    // mapbtn:MapBtn[]

    constructor(){
        console.log("new game created!") 
        this.createElements()
    }

    createElements() {
       // create a mapButton
       let btn = new TreasureMap()
       let worldmap = new Worldmap()
    }
}

window.addEventListener("load", () => new Game())