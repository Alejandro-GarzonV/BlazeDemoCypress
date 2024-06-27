class Purchase{

    elements = {
        msjPurchase:()=> cy.contains("h2", "Thank you for your purchase!"), 
        OkBotonPurchase:()=> cy.get('.confirm')
    }

    mensajeCompra(){
        this.elements.msjPurchase().should('be.visible');
        cy.wait(1000)
        this.elements.OkBotonPurchase().should('be.visible').click({force:true});
    }
   

}export default Purchase;