class GameScreen {

    // private score: number = 0
    // private bombs: Bomb[]
    // private healths: Health[]
    // private car: Car
    private game:Game
    // private hitByBomb:number = 0
    // private textfield: HTMLElement
    

    constructor(g:Game) {
        console.log('start the game')
        this.game = g
        // this.car = new Car()
        // this.bombs = [new Bomb(), new Bomb(), new Bomb(), new Bomb()]
        // this.healths = [new Health(), new Health()]
        // this.textfield = document.createElement("textfield")
        // let foreground = document.getElementsByTagName("foreground")[0]
        // foreground.appendChild(this.textfield);
    }

    public update(): void {
        // this.car.update()
        // this.textfield.innerHTML = "Score:" + this.score

        // for (let h of this.healths) {
        //     h.update()
        // }

        // for (let b of this.bombs) {
        //     b.update()

        //     if (this.checkCollision(this.car.getRectangle(), b.getRectangle())) {
        //         b.reset()
        //         this.score++
        //         console.log("score point!")
        //     }

        //     if (b.getRectangle().bottom - b.getRectangle().height > window.innerHeight) {
        //         b.reset()
        //         this.hitByBomb++
        //         console.log(this.hitByBomb)
        //         if(this.hitByBomb > 5) {
        //             // game over
        //             console.log("gameover")
        //             this.game.emptyScreen()
        //             this.game.showScreen(new GameOver(this.game))
        //         }
        //     }
        // }
    }

    // public checkCollision(a: ClientRect, b: ClientRect): boolean {
    //     return (a.left <= b.right &&
    //         b.left <= a.right &&
    //         a.top <= b.bottom &&
    //         b.top <= a.bottom)
    // }
}