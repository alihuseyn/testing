const axios = jest.requireActual('axios');

function getUsersFromCache() {
    return [
        {
            id: 1,
            name: 'Ali',
            username: 'ali',
            email: 'ali@list.ru'
        },
        {
            id: 2,
            name: 'Huseyn',
            username: 'huseyn',
            email: 'huseyn@list.ru'
        },
    ]
}

async function getUsersFromAPI() {
    const { data } =  await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}

describe('Test user content from cache and from RestFul API', () => {
    it('Test sync function getUserFromCache to have length 2', () => {
        const users = getUsersFromCache();
        expect(users).toHaveLength(2);
    });

    it('Test async function getUsersFromAPI to have length 10 with done', done => {
        getUsersFromAPI().then(users => {
            expect(users).toHaveLength(10);
            done();
        });
    });

    it('Test async function getUsersFromAPI to have length 10 with done', async () => {
        expect.assertions(1);
        const users = await getUsersFromAPI();
        expect(users).toHaveLength(10);
    });
});