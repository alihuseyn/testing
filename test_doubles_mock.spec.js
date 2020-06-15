const User = require('./register_user/user');

jest.mock('./register_user/database');

describe('Save and retrive user', () => {
    it('Should save user and retrieve user with id', () => {
        const data = { name: 'Ali', surname: 'Huseyn' };
        const db = require('./register_user/database');

        db.save = jest.fn();
        db.last = jest.fn().mockReturnValue({ ...data, id: 4 });

        const user = new User(db);
        const response = user.saveAndRetrieveUser(data);

        expect(db.save).toHaveBeenCalledWith(data);
        expect(db.last).toHaveReturnedWith({ ...data, id: 4});
        expect(response).toEqual({ ...data, id: 4 });
    });
});