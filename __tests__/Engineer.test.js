const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Getters return correct information.', () => {
        const engineer = new Engineer('Jane Smith', 123, 'jane@company.com', 'engineerGit');
        expect(engineer.getName()).toBe('Jane Smith');
        expect(engineer.getId()).toBe(123);
        expect(engineer.getEmail()).toBe('jane@company.com');
        expect(engineer.getRole()).toBe('Engineer');
        expect(engineer.getGithub()).toBe('engineerGit');
    });
});