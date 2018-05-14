class Game {
    
    // mapbtn:MapBtn[]

    constructor(){
        console.log("new game created!") 
        this.createElements()
    }

    createElements() {
       // create a mapButton
       let btn = new TreasureMapButton()
       let worldmap = new Worldmap()
       let modal = new Modal()
    }
}

window.addEventListener("load", () => new Game())