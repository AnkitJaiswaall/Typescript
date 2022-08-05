var a:string="hello TS";
console.log(a);

var b="hello peter";
console.log(b);



export {}
class App{
    test(){
        console.log("class fxn working fine")
    }
}

let a1=new App();
a1.test()


//array

let arr=['ankit','anil','peter',7]
arr.push(100)
console.log(arr)

//array with type
let arr1:string[]=['ankit','anil','peter']
arr1.push("ank")
//arr1.push(100)
console.log(arr1)



//object

let users=[{
    name:"ankit",
    email:"ankitjaiswaall@gmail.com",
    phone:"8418847485"
},
{
    name:"hjaksd",
    email:";cnfjdkl@gmail.com",
    phone:"8348745378748355"

}

]

users[1].name="pankaj"

console.log(users)



interface userType{
    name:string,
    age:number,
    address:any
}

let user:userType={
    name:"ram",
    age:24,
    address:"fghvjdewEO"
}

user.address=100

console.log(user)


let user2:any={
    name:"rlcdfjhreuim",
    age:24,
    address:"fghvjdewEO"
}

user2.name=7
user2.name=true
user2.age="ifgyrbei"
user2.address=52
user2.address=true
console.log(user2)


//union

let data:string|number|boolean="uhewfrdcwj"
data=7
data=true
console.log(data)