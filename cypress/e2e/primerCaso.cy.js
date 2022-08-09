/// <reference types="Cypress"/>

//Suite de casos que contiene cada caso

describe('Primer conjunto de casos de prueba', function(){

    beforeEach(()=>{
        //ingresar a la pagina
        cy.visit("http://automationpractice.com/index.php")
    }
    )

    //Caso de Prueba 1
    it('contabilizar la cantidad de elemento en la seccion de pagina principal', function(){
        

        //verificar la cantidad de elementos visible
        cy.get('#homefeatured .product-container').should('have.length',7)
        //obtenemos elemento homefeature 
        cy.get('#homefeatured .product-container').as('ProductosPopulares')
        //Verificamos la cantidad de elemento utilizando el paramentro
        cy.get('@ProductosPopulares').should('have.length',7)
    })

    //Caso Pueba 2
    it('Agragar elementos de tipo "Blousa" al carrito de compra desde la pagina principal', function(){
    //obtenemos elemento homefeature 
    cy.get('#homefeatured .product-container').as('ProductosPopulares')
    //Iteramos para encontrar un producto con nombre X
    cy.get('@ProductosPopulares')
    .find('.product-name')
    .each(($el, index, $list) => {
        if($el.attr('title')==='Blouse'){
            cy.log('Se ha encontrado el elmento buscado')
            cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
            
        }
    })
    

    })

    //Caso de Pueba 3
    it('Agragar elementos de tipo "Printed dress" al carrito de compra desde la pagina principal', function(){
        //obtenemos elemento homefeature 
        cy.get('#homefeatured .product-container').as('ProductosPopulares')
        //Iteramos para encontrar un producto con nombre X
        cy.get('@ProductosPopulares')
        .find('.product-name')
        .each(($el, index, $list) => {
            cy.get('@ProductosPopulares').eq(index).find('.price').then(function($el1){
                let precio=$el1.text()
                cy.log(precio)
            
            if($el.attr('title')=== 'Printed Dress' && precio.includes('26.00')){
                cy.log('Se ha encontrado el elmento buscado')
                cy.log('Se ha encontrado el el precio')
                cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
                
            }
            })
        })
        cy.get('h2 > .ajax_cart_product_txt').should('contains.text','There is 1 item in your cart.').should('be.visible')
    
    })
})