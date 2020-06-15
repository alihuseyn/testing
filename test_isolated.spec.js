
describe('Test latest notes functionality', () => {
    it('Should return empty content', () => {
        jest.isolateModules(() => {
            jest.doMock('./notes', () => {
                return {
                    getLatestNote: jest.fn(),
                }
            });
            const notes = require('./notes');
    
            expect(notes.getLatestNote()).toBe(undefined);  
        });
    });

    it('Should return object with temp content', () => {
        jest.doMock('./notes', () => {
            return {
                getLatestNote: jest.fn().mockReturnValue({ title: 'Temp' })
            }
        });
        const notes = require('./notes');

        expect(notes.getLatestNote()).toEqual({ title: 'Temp' });
    });
});