class TreasureMapButton {

    // modal : HTMLElement
    openbutton : HTMLElement
    

    constructor() {
        console.log("create open map btn")
        // create button 
        this.openbutton = document.createElement("treasure-map-button")
        document.body.appendChild(this.openbutton)

        

        this.openbutton.addEventListener("click", () => this.openModal());
    }

    // create onClick function
    openModal () : void {   
        console.log("btn treasure clicked");
        let modal = document.getElementsByTagName("treasure-modal")
        // this.modal.style.display="block";
        
        // this.modal.style.display="block"
        // this.closebtn.style.display="block"

        // this.closebtn.addEventListener("click", () => this.close());
    }

    
}

class Modal {

    modal : HTMLElement
    closebtn : HTMLElement

    constructor() {
        // add table
        let treasuretable = new TreasureTable()
        // create modal
        this.modal = document.createElement("treasure-modal")
        document.body.appendChild(this.modal)

        // create close btn
        this.closebtn = document.createElement("closebtn")
        this.modal.appendChild(this.closebtn)

        this.closebtn.addEventListener("click", () => this.close());
    }

    close () : void {
        console.log('close modal')
        this.modal.style.display="none"
    }
}


class TreasureTable {

    table : HTMLElement
    
    constructor() {
        // create table
        this.table = document.createElement("TABLE")
        // this.modal.appendChild(this.table)
    }
}