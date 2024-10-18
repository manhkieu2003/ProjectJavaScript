const person={
    first_name:"john",
    last_name:"Doe",
    get Fullname()
    {
        return `${this.first_name} ${this.last_name}`

    },
    set Fullname(name){
        const part = name.split(" ")
        this.first_name = part[0];
        this.last_name =part[1];
    }
}
console.log(person.Fullname) // getter 
person.Fullname ="Manh Kieu"
console.log(person.first_name)
console.log(person.last_name)