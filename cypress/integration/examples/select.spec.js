describe('Select box', () => {
	it('Should load website with select box', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	})

	it('Should select an option from the select box and check its value', () => {
		cy.get('#preferred-interface').as('select-box')
		cy.get('@select-box').select('Both').should('have.value', 'Both')
		cy.get("@select-box").select("JavaScript API").should("have.value", "JavaScript API");
	})
})
