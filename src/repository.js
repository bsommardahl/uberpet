class PetRepository {
    constructor(db){
        this.db = db;
    }

    search(query) {
        return this.db.filter((p) => {
            var pass = true;
            if (query.age) {
                pass = p.age === query.age;
            }
            if (pass && query.type) {
                pass = p.type === query.type;
            }
            return pass;
        });
    }
}
module.exports = PetRepository;