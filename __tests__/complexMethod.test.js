const complexMethod = require('../complexMethod')

describe('Complex Method', () => {
    it('Does some complex stuff', () => {
        const testInput = 145
        const expectedResult = 290
        const result = complexMethod(testInput)

        expect(result).toEqual(expectedResult)
    })
})