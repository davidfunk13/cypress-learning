describe('Working with input fields', () => {
    it("Should navigate to example web app.", ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html")
    })

    it("Should fill out username.", ()=>{    
        cy.get("#user_login").as("username");
        // clear input before typing into it ALWAYS.
        cy.get("@username").clear();

        cy.get("@username").type("Some Invalid Name");
    })

    it("Should fill out password.", ()=>{
        cy.get("#user_password").as("password");
        cy.get("@password").clear();
        cy.get("@password").type("Some invalid password");
    })

    it("Should check the checkbox", ()=>{
        cy.get('input[type="checkbox"]').as("checkbox")
        cy.get("@checkbox").click()
    })

    it("Should submit form.", ()=>{
        cy.contains("Sign in").click();
    })
    
    it("Should display error message on improper input.", ()=>{
        cy.get(".alert-error").should("be.visible");
    })
})
