class User {
    constructor(database) {
        this.database = database;
    }
    saveAndRetrieveUser(user) {
        this.database.save(user);
        return this.database.last();
    }
}

module.exports = User;