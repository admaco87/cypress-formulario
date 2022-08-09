/// <reference types="Cypress"/>

/// Suite de caso de pruebas avanzados

describe('Conjunto de caso de pruebas avanzadas', function(){
    before(function(){
        cy.fixture('example').then(function(datos){
            this.datos=datos
            cy.fixture(this.datos.imagen).as('imagen')
        })
        
    }
    )
    beforeEach(()=>{
        cy.visit('https://testingqarvn.com.es/upload-files/')
    })
    it('se completa el primer formulario', function(){
        
        cy.get('#wsf-1-field-80').type(this.datos.nombre)
        cy.get('#wsf-1-field-81').type(this.datos.apellido)
        cy.get('#wsf-1-field-82').type(this.datos.email)
        cy.get('#wsf-1-field-83').type(this.datos.phone)
        cy.get('#wsf-1-field-84').type(this.datos.direccion)
        cy.get('input[type="radio"][value="'+ this.datos.radio +'"]').check({force:true}).should('be.checked')
        cy.get('#wsf-1-field-87').select(this.datos.sistemOperativo)
        cy.get('#wsf-1-field-89').select(this.datos.opcionesDe)
        
        
        cy.get('input[type="checkbox"][value="'+ this.datos.lenguaje[0]+'"]').check({force:true}).should('be.checked')
        cy.get('input[type="checkbox"][value="'+ this.datos.lenguaje[1]+'"]').check({force:true}).should('be.checked')

        

        
        cy.get('#wsf-1-field-94').then(function($el){
            //convierte la imagen en un string en imagen 64
            const blob= Cypress.Blob.base64StringToBlob(this.imagen, 'imagen/png')
            const file= new File([blob],this.datos.imagen, {type: 'imagen/png'})
            const list= new DataTransfer()

            list.items.add(file)
            const myFileList= list.files
            $el[0].files= myFileList
            $el[0].dispatchEvent(new Event('change', {bubbles:true}))
        })

        cy.get('#wsf-1-field-93').click()
        cy.get('p').should('have.text','Gracias por tu encuesta.')

        


        })
})