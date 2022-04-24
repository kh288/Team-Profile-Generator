const Employee = require(`../lib/Employee`)
const Engineer = require(`../lib/Engineer`)

// Initialize tests for the Engineer Class
describe(`Engineer`, () => {
    // Create a new Engineer object, with a new github arguement
    engineer = new Engineer(`Kevin`, 5, `derp@gmail.com`, `kh288`);
    it(`Creating an engineer should be an object`, () => {
        expect(typeof engineer).toEqual(`object`);
    })

    describe(`getName`, () => {
        it(`should return the name that has been set for the "name" arguement`, () => {
            // We expect the getName function to return `Kevin`
            expect(engineer.getName()).toEqual(`Kevin`);
        })
    })
    describe(`getId`, () => {
        it(`should return the Id that has been set for the "id" arguement`, () => {
            // We expect the getId function to return `5`
            expect(engineer.getId()).toEqual(5);
        })
    })
    describe(`getEmail`, () => {
        it(`should return the email that has been set for the "email" arguement`, () => {
            // We expect the getEmail function to return `derp@gmail.com`
            expect(engineer.getEmail()).toEqual(`derp@gmail.com`);
        })
    })
    describe(`getRole`, () => {
        it(`should return the role for the Engineer class`, () => {
            // We expect the getRole function to return `Engineer`
            expect(employee.getRole()).toEqual(`Engineer`);
        })
    })
    describe(`getGithub`, () => {
        it(`should return the value of their github username`, () => {
            expect(egineer.getGithub().toEqual(`https://github.com/kh288`))
        })
    })
})