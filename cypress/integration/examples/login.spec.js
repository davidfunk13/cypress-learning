describe('Working with input fields', () => {
    it("Should navigate to example web app.", ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html")
    })

    it("Should fill out username.", ()=>{    
        // clear input before typing into it ALWAYS.
        cy.get("#user_login").clear();

        cy.get("#user_login").type("Some Invalid Name");
    })

    it("Should fill out password.", ()=>{
        cy.get("#user_password").clear();
        cy.get("#user_password").type("Some invalid password");
    })

    it("Should submit form.", ()=>{
        cy.contains("Sign in").click();
    })
    
    it("Should display error message on improper input.", ()=>{
        cy.get(".alert-error").should("be.visible");
    })
})
