const ReservationService = require('../src/reservationService');

describe('the reservation service', () => {
    describe('when reserving a pet', () => {
        describe('when the pet is available', () => {
            it('should reserve the pet', () => {
                const id = 1;
                const date = new Date();

                const pet = {
                    id: id
                };
                const repo = {
                    get: jest.fn().mockReturnValueOnce({ id: id }),
                    reserve: jest.fn()
                };
                const service = new ReservationService(repo);
                const reservation = service.reserve(id, date);
                expect(reservation.pet.id).toBe(id);
                expect(repo.reserve.mock.calls.length).toBe(1);
                expect(repo.get.mock.calls.length).toBe(1);
            });
        });
        describe('when the pet already reserved', () => {
            it('should not double book', () => {});
        });
    });
});
