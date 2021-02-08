const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")

describe("Class: Engineer", ()=>{
    it("Instantiates new employee object with engineer role, imports data from Employee class", () => {
    const engineer = new Engineer ("name", "id", "email", "github")
    expect(engineer.name).toEqual("name")
    expect(engineer.id).toEqual("id")
    expect(engineer.email).toEqual("email")
    expect(engineer.github).toEqual("github")
    expect(engineer.role).toEqual("engineer")
    })

    describe("getGithub", ()=>{
        const engineer = new Engineer ("name", "id", "email","github")
        expect(engineer.getGithub()).toEqual("github")
    })

    describe("getRole", ()=>{
        const engineer = new Engineer ("name", "id", "email","github")
        expect(engineer.getRole()).toEqual("engineer")
    })
})