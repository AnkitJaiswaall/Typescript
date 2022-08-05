var App = /** @class */ (function () {
    function App(name) {
        this.name = "Ankit jaiswal";
        this.name = name;
    }
    App.prototype.getName = function () {
        return this.name;
    };
    return App;
}());
var a1 = new App("peter");
console.log(a1.getName());
