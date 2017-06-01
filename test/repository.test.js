const PetRepository = require('../src/repository');

describe('the pet repo', () => {
    describe('when searching the repo for pets', () => {
        const db = [
            { age: 3, type: 'dog'},
            { age: 5, type: 'cat'},
            { age: 10, type: 'dog'},
            { age: 3, type: 'cat'},
        ];
        const repo = new PetRepository(db);

        it('should return only the pets that meet one search criteria', () => {
            const results = repo.search({ age: 3 });
            expect(results.length).toBe(2);
        });

        it('should return only the pets that meet two search criteria', () => {
            const results = repo.search({ age: 3, type: 'dog' });
            expect(results.length).toBe(1);
        });
    });
});