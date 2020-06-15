const axios = require('axios');

async function getTodos(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

jest.mock('https');

describe('Get Todos', () => {
    it('Should return selected todo url correctly', async () => {
        expect.assertions(1);
        const response = await getTodos(5);
        expect(response.path).toEqual('/todos/5');
    });
});
