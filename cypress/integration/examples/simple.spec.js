describe('Browser actions', () => {
	it('Should load correct url', () => {
		cy.visit('www.google.com', { timeout: 10000 })
	})
    
    it("Should check correct url", ()=>{
        cy.url().should("include", "google.com");
    })
})