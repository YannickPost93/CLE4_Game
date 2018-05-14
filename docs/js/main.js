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
        var btn = new TreasureMap();
        var worldmap = new Worldmap();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var TreasureMap = (function () {
    function TreasureMap() {
        var _this = this;
        console.log("createbtn");
        this.div = document.createElement("treasure-map-button");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.click(); });
    }
    TreasureMap.prototype.click = function () {
        console.log("btn treasure clicked");
        this.modal = document.createElement("treasure-modal");
        document.body.appendChild(this.modal);
    };
    return TreasureMap;
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