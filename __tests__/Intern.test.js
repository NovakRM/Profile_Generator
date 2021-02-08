const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")

describe("Class: Intern", ()=>{
    it("Instantiates new employee object with intern role, imports data from Employee class", () => {
    const intern = new Intern ("name", "id", "email", "school")
    expect(intern.name).toEqual("name")
    expect(intern.id).toEqual("id")
    expect(intern.email).toEqual("email")
    expect(intern.school).toEqual("school")
    expect(intern.role).toEqual("intern")
    })

    describe("getSchool", ()=>{
        const intern = new Intern ("name", "id", "email", "school")
        expect(intern.getSchool()).toEqual("school")
    })

    describe("getRole", ()=>{
        const intern = new Intern ("name", "id", "email", "school")
        expect(intern.getRole()).toEqual("intern")
    })
})