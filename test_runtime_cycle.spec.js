const a = 3;

beforeAll(() => {
    console.log('[beforeAll] Called before all tests');
});

beforeEach(() => {
    console.log('[beforeEach] Called before each test');
});

function sum(a, b) {
    return a + b;
}

function pow(a, b) {
    return a ** b;
}

describe('Test math funtions', () => {
    it('Should return summation of 3 and 5 as 8', () => {
        expect(sum(a, 5)).toEqual(8);
    });

    it('Should return pow of 3 to 3 as 27', () => {
        expect(pow(a, 3)).toEqual(27);
    });
})


afterEach(() => {
    console.log('[afterEach] Called after each test');
});

afterAll(() => {
    console.log('[afterAll] Called after all tests');
});