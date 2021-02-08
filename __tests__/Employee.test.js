const Employee = require("../lib/Employee")

describe("Class: Employee", ()=>{
    it("Instantiates new employee object with name/id/email, role is employee", () => {
    const employee = new Employee ("name", "id", "email")
    expect(employee.name).toEqual("name")
    expect(employee.id).toEqual("id")
    expect(employee.email).toEqual("email")
    expect(employee.role).toEqual("employee")
    })

    describe("getName", ()=>{
        const employee = new Employee ("name", "id", "email")
        expect(employee.getName()).toEqual("name")
    })

    describe("getEmail", ()=>{
        const employee = new Employee ("name", "id", "email")
        expect(employee.getEmail()).toEqual("email")
    })

    describe("getRole", ()=>{
        const employee = new Employee ("name", "id", "email")
        expect(employee.getRole()).toEqual("employee")
    })
})