
const Intern = require('../lib/Intern');

describe('Inter', () => {
    it('Getters return correct information.', () => {
        const intern = new Intern('Jane Smith', 123, 'jane@company.com', 'Harvard');
        expect(intern.getName()).toBe('Jane Smith');
        expect(intern.getId()).toBe(123);
        expect(intern.getEmail()).toBe('jane@company.com');
        expect(intern.getRole()).toBe('Intern');
        expect(intern.getSchool()).toBe('Harvard');
    });
});