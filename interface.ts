interface userType{
    name:string,
    age:number,
    email:string,
    getName:()=>string
}

let usr:userType={
    name:"Ankit Jaiswal",
    age:23,
    email:"ankitjaiswaall@gmail.com",
    getName:function(){
        return "Ankit Jaiswal"
    }
}

console.log(usr)
console.log(usr.getName())