class TreasureMap {
    
    div : HTMLElement
    modal : HTMLElement

    constructor() {
        console.log("createbtn") 
        this.div = document.createElement("treasure-map-button")
        document.body.appendChild(this.div)

        this.div.addEventListener("click", () => this.click());
    }

    // create onClick function
    click () : void {   
        console.log("btn treasure clicked");
        
        this.modal = document.createElement("treasure-modal")
        document.body.appendChild(this.modal)
    }
}