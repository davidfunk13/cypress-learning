describe("Custom commands", ()=>{
    it("Should login to appliction using custom commands.", ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.login("username", "password");
    })
})