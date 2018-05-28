class Game {
    
    private currentscreen: StartScreen | GameScreen

    constructor(){
       
        this.currentscreen = new StartScreen(this)
        this.gameLoop()
    }

    private gameLoop():void {
        this.currentscreen.update()

        requestAnimationFrame(() => this.gameLoop())
    }

    public showScreen(screen : StartScreen | GameScreen) {
        this.currentscreen = screen
    }
}

window.addEventListener("load", () => new Game())