const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    describe.only('calc correct values', () => {
        calcFunctions.calcData().forEach(element => {
            it(`calculation ${element.func} should return ${element.result}`, () => {
                expect(eval(element.func)).to.equal(element.result);
            })
        });
    });

    describe.only('check exceptions', () => {
        it('can\'t divide by 0', () => {
            expect(() => calc(5).divide(0)).to.throw();
        });

        it('can\'t get sqrt from negative value', () => {
            expect(() => calc(-3).sqrt()).to.throw();
        });
    });
});