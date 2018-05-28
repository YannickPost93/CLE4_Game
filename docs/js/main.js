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
        this.currentscreen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.showScreen = function (screen) {
        this.currentscreen = screen;
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameScreen = (function () {
    function GameScreen(g) {
        console.log('start the game');
        this.game = g;
    }
    GameScreen.prototype.update = function () {
    };
    return GameScreen;
}());
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
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.textfield = document.createElement("textfield");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.textfield);
        this.textfield.addEventListener("click", function () { return _this.switchScreens(); });
    }
    StartScreen.prototype.update = function () {
        this.textfield.innerHTML = "START GAME";
    };
    StartScreen.prototype.switchScreens = function () {
        console.log('switch to screen');
        this.game.showScreen(new GameScreen(this.game));
    };
    return StartScreen;
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