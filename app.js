"use strict";
exports.__esModule = true;
var a = "hello TS";
console.log(a);
var b = "hello peter";
console.log(b);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("class fxn working fine");
    };
    return App;
}());
var a1 = new App();
a1.test();
//array
var arr = ['ankit', 'anil', 'peter', 7];
arr.push(100);
console.log(arr);
//array with type
var arr1 = ['ankit', 'anil', 'peter'];
arr1.push("ank");
//arr1.push(100)
console.log(arr1);
//object
var users = [{
        name: "ankit",
        email: "ankitjaiswaall@gmail.com",
        phone: "8418847485"
    },
    {
        name: "hjaksd",
        email: ";cnfjdkl@gmail.com",
        phone: "8348745378748355"
    }
];
users[1].name = "pankaj";
console.log(users);
var user = {
    name: "ram",
    age: 24,
    address: "fghvjdewEO"
};
user.address = 100;
console.log(user);
var user2 = {
    name: "rlcdfjhreuim",
    age: 24,
    address: "fghvjdewEO"
};
user2.name = 7;
user2.name = true;
user2.age = "ifgyrbei";
user2.address = 52;
user2.address = true;
console.log(user2);
//union
var data = "uhewfrdcwj";
data = 7;
data = true;
console.log(data);
