/////// Object_literal
let person={
    first_name:"manh",
    last_name:"kieu",
    getFunction: function () {
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number: {
        mobile: '12345',
        landline: '6789'
    }
}
////////////////////=== contructor in class 
console.log(person.getFunction())
console.log(person.phone_number.mobile)
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  console.log(myCar1.name)

// object contructor
function person2(name,age)
{
this.name =name
this.age =age
}
const manh = new person2("manh",25)
console.log(manh.name)
// Object.create() example a
const coder={
    isStudying: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I 
              studying?: ${this.isStudying}.`)
    }
}
const me =Object.create(coder)
me.name="nguyenmaianh"
me.isStudying=true;
me.printIntroduction();
// Inheritance
class Nomal{
    constructor(name)
    {
        this.name=name;
    }
    toString()
    {
        return `Name of person: ${this.name}`

    }

}
class student extends Nomal
{
    constructor(name,id)
    {
        super(name)
        this.id =id;
    }
    toString() {
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student("manh",2)
console.log(student1.toString())
