///<reference types='cypress' />
import { amazonPage } from "../pages/amazonPages.cy"
const amazonHomePage = new amazonPage
describe('Amazon End to End Functionality', () => {
   let loginCredential
   beforeEach('login data',()=>{
     cy.fixture('loginData').then((logindata)=>{
         loginCredential = logindata
     })
   })

  it('Verify title of the page ', () => {
    amazonHomePage.homePage()
     amazonHomePage.getTiteOfPage().should('contain','Shopping')
  })

  it('Verify Cart icon',()=>{
    amazonHomePage.homePage()
    amazonHomePage.isCartIconDisplayed().should('be.visible')
  })

  it('Search product and select first product',()=>{
    amazonHomePage.homePage()
    amazonHomePage.productSearch(loginCredential.productName)
    amazonHomePage.selectFirstProcuctResults()
    amazonHomePage.addProcuctToCart()
  })

  it('Verify logged in to the app',()=>{
    amazonHomePage.homePage()
    amazonHomePage.loginToApp(loginCredential.username,loginCredential.password)
  })
  it('',()=>{
    
  })
})