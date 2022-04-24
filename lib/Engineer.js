const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super();

        this.name = name;
        this.id = id;
        this.email = email;

        this.github = github;
        this.role = "Engineer";
    }
    getRole() {
        return this.role
    }
    getGithub() {
        return `https://github.com/${this.github}`;
    }
}
// Export Engineer class for other files to import
module.exports = Engineer;
