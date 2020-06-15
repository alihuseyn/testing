function helloWorld(name) {
    return `Hello World for ${name}!`;
}


describe('Hello World Test', () => {
    it ('Should return Hello World for Alihuseyn', () => {
        expect(helloWorld('Alihuseyn')).toBe('Hello World for Alihuseyn!');
    });
});