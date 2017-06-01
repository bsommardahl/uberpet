const sum = require('../src/example');

describe('addition in a calculator', () => {
    it('should return the correct sum', () => {
        expect(sum(1, 2)).toBe(4);
    });
});
