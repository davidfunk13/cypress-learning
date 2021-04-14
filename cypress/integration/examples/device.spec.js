describe("Device tests", ()=>{
    it("720p", ()=>{
        cy.viewport(1280, 720)
        cy.visit("www.google.com");
        cy.wait(3000);
    })
    it("1080p", ()=>{
        cy.viewport(1920, 1080)
        cy.visit("www.google.com");
        cy.wait(3000);
    })
    it("iPhoneX", ()=>{
        cy.viewport("iphone-x")
        cy.visit("www.google.com");
        cy.wait(3000);
    })
    it("iPad Mini", ()=>{
        cy.viewport("ipad-mini")
        cy.visit("www.google.com");
        cy.wait(3000);
    })
    it("MBP 15in", ()=>{
        cy.viewport("macbook-15")
        cy.visit("www.google.com");
        cy.wait(3000);
    })
})