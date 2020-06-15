function sum(a, b) {
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        throw new Error('Inputs are not number');
    }

    return a + b;
}

describe.each([
    [1, 2, 3],
    [4, 5, 9],
    [6, '7', new Error('Inputs are not number')]
]) ('Test for adding (%i, %i)', (a, b, expected) => {
    test(`Should return [${expected}] when add(${a}, ${b})`, () => {
        if (expected instanceof Error) {
            expect(() => {
                sum(a, b)
            }).toThrowError(expected);
        } else {
            expect(sum(a, b)).toBe(expected);
        }
    });
});
