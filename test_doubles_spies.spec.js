class Colors {
    hexToRGB(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    convertColorsToRGB(data) {
        return data.map(this.hexToRGB);
    }
}

describe('Convert colors to rgb', () => {
    it('Should convert colors to rgb', () => {
        const color = new Colors();
        const hexToRGBFn = jest.spyOn(color, 'hexToRGB');
        color.convertColorsToRGB(['#ff0000', '#ffff00', '#ff00ff']);
        
        expect(hexToRGBFn).toHaveBeenCalledTimes(3);
    });
});
