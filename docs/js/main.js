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
        this.cars = [];
        this.bicycles = [];
        for (var i = 0; i < 10; i++) {
            var c = new Car();
            this.cars.push(c);
            var b = new Bicycle();
            this.bicycles.push(b);
        }
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map