class Worldmap {
    
   div : HTMLElement

    constructor() {
       console.log("createbtn") 
       this.div = document.createElement("world-map-button")
       document.body.appendChild(this.div)

       this.div.addEventListener("click", () => this.clickWorldButton());
    }

    // create onClick function
    clickWorldButton () : void {   
         console.log("btn world clicked");
    }
}