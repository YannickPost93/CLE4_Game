class Game {
    
    private player:Player
    private bomb:Bomb
    private platform:Platform
    private foreground:HTMLElement
   

    constructor() {
        this.bomb = new Bomb()
        this.platform = new Platform()
        this.player = new Player(this)
        
        this.foreground = document.getElementsByTagName("foreground")[0] as HTMLElement
        
        this.gameLoop()
    }

    public scrollLevel(pos:number){
        this.foreground.style.transform = `translateX(${pos}px)`
    }
    
    private gameLoop():void{
        
        this.player.update()
        this.bomb.update() // doet op zich niks
        this.platform.update()

        if (this.checkCollision(this.player.getRectangle(), this.platform.getRectangle())) {
           this.player.hitPlat()
        } else {
            this.player.gravity = 10
        }
        if (this.checkCollision(this.player.getRectangle(), this.bomb.getRectangle())) {
            console.log("car hits the bomb")
        }

        requestAnimationFrame(() => this.gameLoop())
    }

    public checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
} 

window.addEventListener("load", () => new Game())