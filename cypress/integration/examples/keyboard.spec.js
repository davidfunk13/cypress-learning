describe('Keyboard pressing api', () => {
    it("Should submit searchbox by pressing enter", ()=>{
        cy.visit("http://zero.webappsecurity.com/index.html");
        
        // {backspace}, {uparrow}, {space}
        cy.get("#searchTerm").type("some sample text{enter}")
    })
})
