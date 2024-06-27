class ProducDetails{

    elements = {
        addToCart: ()=> cy.get('.col-sm-12 > .btn'),
        cartlink  :()=> cy.get('#cartur')
    }
    anadirProducto(){
        this.elements.addToCart().should('be.visible').click()
    }
    irAlCarrito(){
        this.elements.cartlink().should('be.visible').click();
    }

}export default ProducDetails;