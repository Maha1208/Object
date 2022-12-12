// two prototypes will be visible(bay: "LAMP"name: "Sakthi"[[Prototype]]: Objectconstructor: ƒ domain(name,bay)[[Prototype]]: Object) when we ceate object using constructor method

function constructor(name1,age)
{
    this.name1 = name1;
    this.age = age;
}
constructor.prototype.course = "course";  
//The prototype property allows you to add new properties to objects constructors.
constructor.prototype.getName1 = function()//The prototype property allows you to add new methods to objects constructors.

{
    return this.name1;
}
constructor.prototype.getAge = function()
{
    return this.getAge;
}
var emp= new constructor("Maha",22);
var emp1=new constructor("lakshmi",22);
console.log(emp,"\n",emp1);