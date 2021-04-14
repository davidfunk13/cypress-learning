describe("Browser actions", () => {
	it("Should load books website", () => {
		cy.visit("http://books.toscrape.com/index.html", { timeout: 10000 });
		cy.url().should("include", "index.html");
		cy.log("Website has loaded.");
	})

	it("Should click on the Travel category", () => {
		// clicks travel link category on the homepage. Double/right click also an option in the api
		cy.get("a").contains("Travel").click();
		// check contents of h1 after navigation
		cy.get("h1").contains("Travel");
	})

	it("should display the correct number of books", () => {
		// querySelectorAll equivalent selector counts items in array returned.
		cy.get(".product_pod").its("length").should("eq", 11);
	})

	it("Should click on the poetry category", () => {
		cy.get("a").contains("Poetry").click();
	})

	it("Should click on Olio book", ()=> {
		cy.get("a").contains("Olio").click();
	})

	it("Should have correct price tag.", ()=>{
		cy.get(".price_color").contains("23.88")
	})
})
