const axios = require('axios');

async function getTypicodePosts() {
    return await axios.get('https://jsonplaceholder.typicode.com/posts');
}

async function posts() {
    const { data } = await getTypicodePosts();
    return data.map(({ title, body }) => ({ title, body }));
}


jest.mock('axios');

describe('Get posts', () => {
    it('Should return title and body of posts', async () => {
        expect.assertions(1);

        axios.get = jest
            .fn()
            .mockResolvedValue({ 
                data : [
                    {
                        title: 'Title',
                        body: 'Body',
                        user_id: 1,
                        post_id: 1
                    }
                ]
            });
        
        expect(await posts()).toContainEqual({
            title: 'Title',
            body: 'Body'
        });
    });
});
