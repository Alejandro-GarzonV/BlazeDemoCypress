class Cart {
   
    elements = {
        placeOrderButton:()=> cy.get('.col-lg-1 > .btn'),  
        DeleteProductPO:()=> cy.get('.success > :nth-child(4) > a')
    }
    clickPlaceOrderButton(){
        this.elements.placeOrderButton().should('be.visible').click();
    }
    clickDeleteProductPO(){
        this.elements.DeleteProductPO().should('be.visible').click();
    }
}export default Cart;
