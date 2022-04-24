const Intern = require(`../lib/Intern`);

// Initialize tests for the Intern Class
describe(`Intern`, () => {
    // Create a new Intern object, with a new github arguement
    const name = `Kevin`;
    const id = 5;
    const email = `derp@gmail.com`;
    const school = `Berkeley Extension`;

    intern = new Intern(name, id, email, school);
    it(`Creating an intern should be an object`, () => {
        expect(typeof intern).toEqual(`object`);
    })

    describe(`getName`, () => {
        it(`should return the name that has been set for the "name" arguement`, () => {
            // We expect the getName function to return `Kevin`
            expect(intern.getName()).toEqual(`Kevin`);
        })
    })
    describe(`getId`, () => {
        it(`should return the Id that has been set for the "id" arguement`, () => {
            // We expect the getId function to return `5`
            expect(intern.getId()).toEqual(5);
        })
    })
    describe(`getEmail`, () => {
        it(`should return the email that has been set for the "email" arguement`, () => {
            // We expect the getEmail function to return `derp@gmail.com`
            expect(intern.getEmail()).toEqual(`derp@gmail.com`);
        })
    })
    describe(`getRole`, () => {
        it(`should return the role for the Intern class`, () => {
            // We expect the getRole function to return `Intern`
            expect(intern.getRole()).toEqual(`Intern`);
        })
    })
    describe(`getSchool()`, () => {
        it(`should return the school they put as an arguement`, () => {
            expect(intern.getSchool()).toEqual(`Berkeley Extension`);
        })
    })
})