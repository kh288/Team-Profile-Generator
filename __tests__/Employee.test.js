const Employee = require('../lib/Employee');

// Initialize tests for the Employee Class
describe('Employee', () => {
    // We create a new employee with these given arguments
    employee = new Employee("Kevin", 5, "derp@gmail.com");
    it("Creating the employee object should be an object", () => {
        expect(typeof employee).toEqual("object");
    })

    describe('getName', () => {
        it("should return the name that has been set for the 'name' arguement", () => {
            // We expect the getName function to return "Kevin"
            expect(employee.getName()).toEqual("Kevin");
        })
    })
    describe('getId', () => {
        it("should return the Id that has been set for the 'id' arguement", () => {
            // We expect the getId function to return "5"
            expect(employee.getId()).toEqual(5);
        })
    })
    describe('getEmail', () => {
        it("should return the email that has been set for the 'email' arguement", () => {
            // We expect the getId function to return "5"
            expect(employee.getEmail()).toEqual("derp@gmail.com");
            // expect(employee.getEmail()).toEqual()
        })
    })
    describe('getRole', () => {
        it("should return the role for the Employee class", () => {
            // We expect the getId function to return "5"
            expect(employee.getRole()).toEqual("Employee");
            // expect(employee.getEmail()).toEqual()
        })
    })
})