/// <reference types="Cypress"/>

describe('Segundo conjunto de casos de prueba', function(){
    beforeEach(()=>{
        //ingresar a la pagina
        cy.visit("http://automationpractice.com/index.php")
    }
    )
//Caso 2.1
  it('Flotando sobre elementos', function(){
      //Verificar que el dropdown de women  
      cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr','style','display: block')
      cy.get('a[title= "Tops"]').should('be.visible')
      cy.get('a[title= "T-shirts"]').should('be.visible')
      cy.get('a[title= "Blouses"]').should('be.visible')
      cy.get('a[title= "Dresses"]').should('be.visible')
      cy.get('a[title= "Casual Dresses"]').should('be.visible')
      cy.get('a[title= "Evening Dresses"]').should('be.visible')
      cy.get('a[title= "Summer Dresses"]').should('be.visible')

  })
  //Caso 2.2 checkboxes funcionamiento
  it('Verificar el funcionamiento de los checkboxes', function(){
      //checkboxes ckeck y verificacion casual dresses 
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
    cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
    cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')
    //verifica funcionamiento de dropdown Select In stock
    cy.get('#selectProductSort').select('In stock').should('have.value','quantity:desc')




 })
})