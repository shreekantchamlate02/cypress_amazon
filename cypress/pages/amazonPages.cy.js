export class amazonPage {
    homePage(){
        cy.visit('https://www.amazon.in/')
    }

    getTiteOfPage(){
        return cy.title()
    }

    isCartIconDisplayed(){
        return cy.get('#nav-cart')
    }
    
    productSearch(ProductName){
        cy.get('#twotabsearchtextbox').type(ProductName + '{enter}')
    }

    selectFirstProcuctResults(){
        return cy.get('.s-main-slot .s-line-clamp-2').first().invoke('removeAttr','target').click()
    }

    addProcuctToCart(){
        cy.get('[value="Add to Cart"]').click()
    }

    loginToApp(username,password){
        cy.get('#nav-link-accountList').invoke('show').click()
        cy.get('.nav-action-signin-button').click()
        cy.get('#ap_email_login').type(username)
        cy.get('#continue').click()
        cy.get('#ap_password').type(password)
        cy.get('#signInSubmit').click()
    }
}