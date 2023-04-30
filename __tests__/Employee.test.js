const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Getters return correct information.', () => {
        const employee = new Employee('Jane Smith', 123, 'jane@company.com');
        expect(employee.getName()).toBe('Jane Smith');
        expect(employee.getId()).toBe(123);
        expect(employee.getEmail()).toBe('jane@company.com');
        expect(employee.getRole()).toBe('Employee');
    });
});