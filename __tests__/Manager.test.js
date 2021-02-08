const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")

describe("Class: Manager", ()=>{
    it("Instantiates new employee object with manager role, imports data from Employee class", () => {
    const manager = new Manager ("name", "id", "email", "office")
    expect(manager.name).toEqual("name")
    expect(manager.id).toEqual("id")
    expect(manager.email).toEqual("email")
    expect(manager.office).toEqual("office")
    expect(manager.role).toEqual("manager")
    })

    describe("getOffice", ()=>{
        const manager = new Manager ("name", "id", "email","office")
        expect(manager.getOffice()).toEqual("office")
    })

    describe("getRole", ()=>{
        const manager = new Manager ("name", "id", "email","office")
        expect(manager.getRole()).toEqual("manager")
    })
})