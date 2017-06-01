class ReservationService{

    constructor(repo){
        this.repo = repo;
    }

    reserve(id, date) {
        const pet = this.repo.get(id);
        this.repo.reserve(pet, date);
        return { pet: pet };
    }
}
module.exports = ReservationService;