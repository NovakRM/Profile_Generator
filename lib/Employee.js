class Employee{
    constructor(name, id, email){
    this.name = name
    this.id = id
    this.email = email
    this.role = "employee"
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.role
    }
}

module.exports = Employee