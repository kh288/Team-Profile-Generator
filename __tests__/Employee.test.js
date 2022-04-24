const Employee = require(`../lib/Employee`);

// Initialize tests for the Employee Class
describe(`Employee`, () => {
    // We create a new employee with these given arguments
    const name = `Kevin`;
    const id = 5;
    const email = `derp@gmail.com`;

    employee = new Employee(name, id, email);
    it(`Creating an employee should be an object`, () => {
        expect(typeof employee).toEqual(`object`);
    })

    describe(`getName`, () => {
        it(`should return the name that has been set for the "name" arguement`, () => {
            // We expect the getName function to return `Kevin`
            expect(employee.getName()).toEqual(`Kevin`);
        })
    })
    describe(`getId`, () => {
        it(`should return the Id that has been set for the "id" arguement`, () => {
            // We expect the getId function to return `5`
            expect(employee.getId()).toEqual(5);
        })
    })
    describe(`getEmail`, () => {
        it(`should return the email that has been set for the "email" arguement`, () => {
            // We expect the getEmail function to return `derp@gmail.com`
            expect(employee.getEmail()).toEqual(`derp@gmail.com`);
        })
    })
    describe(`getRole`, () => {
        it(`should return the role for the Employee class`, () => {
            // We expect the getRole function to return `Employee`
            expect(employee.getRole()).toEqual(`Employee`);
        })
    })
})