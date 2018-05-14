"use strict";
var Bicycle = (function () {
    function Bicycle() {
        console.log("tringeling");
    }
    return Bicycle;
}());
var Car = (function () {
    function Car() {
        console.log("vroom!");
    }
    return Car;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        this.createElements();
    }
    Game.prototype.createElements = function () {
        var btn = new TreasureMapButton();
        var worldmap = new Worldmap();
        var modal = new Modal();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var TreasureMapButton = (function () {
    function TreasureMapButton() {
        var _this = this;
        console.log("create open map btn");
        this.openbutton = document.createElement("treasure-map-button");
        document.body.appendChild(this.openbutton);
        this.openbutton.addEventListener("click", function () { return _this.openModal(); });
    }
    TreasureMapButton.prototype.openModal = function () {
        console.log("btn treasure clicked");
        var modal = document.getElementsByTagName("treasure-modal");
        this.modal.style.display = "block";
    };
    return TreasureMapButton;
}());
var Modal = (function () {
    function Modal() {
        var _this = this;
        var treasuretable = new TreasureTable();
        this.modal = document.createElement("treasure-modal");
        document.body.appendChild(this.modal);
        this.closebtn = document.createElement("closebtn");
        this.modal.appendChild(this.closebtn);
        this.closebtn.addEventListener("click", function () { return _this.close(); });
    }
    Modal.prototype.close = function () {
        console.log('close modal');
        this.modal.style.display = "none";
    };
    return Modal;
}());
var TreasureTable = (function () {
    function TreasureTable() {
        this.table = document.createElement("TABLE");
    }
    return TreasureTable;
}());
var Worldmap = (function () {
    function Worldmap() {
        var _this = this;
        console.log("createbtn");
        this.div = document.createElement("world-map-button");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.clickWorldButton(); });
    }
    Worldmap.prototype.clickWorldButton = function () {
        console.log("btn world clicked");
    };
    return Worldmap;
}());
//# sourceMappingURL=main.js.map