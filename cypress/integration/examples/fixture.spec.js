describe("Login with fixture data", ()=> {
    it("Should attempt to login.", ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html")

        cy.fixture("user").then((user)=>{
            const username = user.username;
            const pass = user.password;
            cy.log(username, pass)
            cy.get("#user_login").type(username);
            cy.get("#user_password").type(pass);
            cy.contains("Sign in").click();

        })
    })
})