const Engineer = require(`../lib/Engineer`)

// Initialize tests for the Engineer Class
describe(`Engineer`, () => {
    // Create a new Engineer object, with a new github arguement
    const name = `Kevin`;
    const id = 5;
    const email = `derp@gmail.com`;
    const github = `kh288`;

    engineer = new Engineer(name, id, email, github);
    it(`Creating an engineer should be an object`, () => {
        expect(typeof engineer).toEqual(`object`);
    })

    describe(`getName`, () => {
        it(`should return the name that has been set for the "name" arguement`, () => {
            // We expect the getName function to return `Kevin`
            expect(engineer.getName()).toEqual(name);
        })
    })
    describe(`getId`, () => {
        it(`should return the Id that has been set for the "id" arguement`, () => {
            // We expect the getId function to return `5`
            expect(engineer.getId()).toEqual(id);
        })
    })
    describe(`getEmail`, () => {
        it(`should return the email that has been set for the "email" arguement`, () => {
            // We expect the getEmail function to return `derp@gmail.com`
            expect(engineer.getEmail()).toEqual(email);
        })
    })
    describe(`getRole`, () => {
        it(`should return the role for the Engineer class`, () => {
            // We expect the getRole function to return `Engineer`
            expect(engineer.getRole()).toEqual(`Engineer`);
        })
    })
    describe(`getGithub`, () => {
        it(`should return the value of their github username`, () => {
            // We expect the github username to be added to a link and `getGithub()` is called
            expect(engineer.getGithub().toEqual(`https://github.com/${github}`))
        })
    })
})