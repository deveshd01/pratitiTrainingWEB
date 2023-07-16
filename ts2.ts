class Person {
    name: string;
    age: number;

    constructor(name:string, agee?:number){
        this.name=name;
        if(agee)        // age is optional constructor overloading
        {this.age=agee;}
    }
    info(){
        console.log(this.name, this.age);
    }
}

let obj:Person = new Person("devesh", 20);
obj.info();
