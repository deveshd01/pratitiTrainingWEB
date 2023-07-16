var Person = /** @class */ (function () {
    function Person(name, agee) {
        this.name = name;
        if (agee) // age is optional constructor overloading
         {
            this.age = agee;
        }
    }
    Person.prototype.info = function () {
        console.log(this.name, this.age);
    };
    return Person;
}());
var obj = new Person("devesh", 20);
obj.info();
var obj2;
console.log("hiiiiii--->");
obj.info();
