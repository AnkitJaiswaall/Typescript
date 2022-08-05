class Parent{

    name:string;
    setName(name){
        this.name=name
    }
}

class Child extends Parent{
    getName(){
        return this.name
    }
}

let c=new Child();
c.setName("peter")

console.log(c.getName())