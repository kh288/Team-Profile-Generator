const Manager = require(`../lib/Manager`)

// Initialize tests for the Manager Class
describe(`Manager`, () => {
    // Create a new Manager object, with a new github arguement
    const name = `Kevin`;
    const id = 5;
    const email = `derp@gmail.com`;
    const officeNumber = 45;

    manager = new Manager(name, id, email, officeNumber);
    it(`Creating an manager should be an object`, () => {
        expect(typeof manager).toEqual(`object`);
    })

    describe(`getName`, () => {
        it(`should return the name that has been set for the "name" arguement`, () => {
            // We expect the getName function to return `Kevin`
            expect(manager.getName()).toEqual(`Kevin`);
        })
    })
    describe(`getId`, () => {
        it(`should return the Id that has been set for the "id" arguement`, () => {
            // We expect the getId function to return `5`
            expect(manager.getId()).toEqual(5);
        })
    })
    describe(`getEmail`, () => {
        it(`should return the email that has been set for the "email" arguement`, () => {
            // We expect the getEmail function to return `derp@gmail.com`
            expect(manager.getEmail()).toEqual(`derp@gmail.com`);
        })
    })
    describe(`getRole`, () => {
        it(`should return the role for the Manager class`, () => {
            // We expect the getRole function to return `Manager`
            expect(manager.getRole()).toEqual(`Manager`);
        })
    })
    describe(`officeNumber`, () => {
        it(`should store the office number arguement variable`, () => {
            expect(manager.officeNumber).toEqual(45);
        })
    })
})