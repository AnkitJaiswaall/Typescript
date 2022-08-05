
export{}
class App{
    name:string="Ankit jaiswal";
    constructor(name:string){
        this.name=name
    }

    getName():string{
        return this.name
    }
}

let a1=new App("peter");
console.log(a1.getName())