const Employee = require('../lib/Employee');

// Initialize tests for the Employee Class
describe('Employee', () => {
    describe('getName', () => {
        it("should return the name that has been set for the 'name' arguement", () => {
            // We create a new employee with these given arguments
            employee = new Employee("Kevin", 5, "derp@gmail.com");
            // We expect the getName function to return "Kevin"
            expect(employee.getName()).toEqual("Kevin");
        })
    })
})