describe('Browser actions', () => {
	it('Should load correct url', () => {
		cy.visit('https://www.lipsum.com/', { timeout: 10000 })

		cy.on('uncaught:exception', (err, runnable) => {
			// returning false here prevents Cypress from
			// failing the test
			return false
		})
	})

	it('Should check correct url', () => {
		cy.url().should('include', 'lipsum.com')
	})

    //implicit waiting
    
	it('Should wait 5 seconds', () => {
		cy.wait(5000)
	})

	//pausing, for debugging
	it('Should pause the execution', () => {
		cy.pause()
	})
	it('Should find correct element on the page.', () => {
		cy.get('h1').should('be.visible')
	})
})
