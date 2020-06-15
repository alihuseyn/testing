class Database {
    constructor() {
        this.data = [];
    }
    save(user) {
        const id = this.data.length + 1;
        this.data.push({...user, id });
    }
    last() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Database;