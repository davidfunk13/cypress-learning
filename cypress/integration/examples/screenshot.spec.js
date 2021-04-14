describe('Screenshot', () => {
	it('Should take a full page screenshot', () => {
		cy.visit('https://devexpress.github.io/testcafe/example')
		cy.screenshot({ capture: 'fullPage' })
	})

	it('Should take a screenshot of a single element', () => {
        cy.get("header").screenshot();
    })
})
