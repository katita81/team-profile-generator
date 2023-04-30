const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Getters return correct information.', () => {
        const manager = new Manager('Jane Smith', 123, 'jane@company.com', '45');
        expect(manager.getName()).toBe('Jane Smith');
        expect(manager.getId()).toBe(123);
        expect(manager.getEmail()).toBe('jane@company.com');
        expect(manager.getRole()).toBe('Manager');
        expect(manager.getOfficeNumber()).toBe('45');
    });
});