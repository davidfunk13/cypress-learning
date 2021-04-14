describe('My first simple test with Cypress', () => {
	it("True should be true.",()=>{
        expect(true).to.equal(true);
    })
    it("",()=>{
        expect(5).to.equal(5);
    })
})

describe('Additional describe block', () => {
	it("False should be false.",()=>{
        expect(false).to.equal(false);
    })
    it("",()=>{
        expect(5).to.equal(5);
    })
})
    