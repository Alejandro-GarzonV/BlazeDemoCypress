class PlaceOrder {

    elements = {
        namePlaceOrder:()=> cy.get('#name'),
        countryPlaceOrder:()=>cy.get('#country'),
        cityPlaceOrder:()=>cy.get('#city'),
        cardPlaceOrder:()=>cy.get('#card'),
        monthPlaceOrder:()=>cy.get('#month'),
        yearPlaceOrder:()=>cy.get('#year'),
        PurchasePlaceOrder:()=>cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        closePlaceOrder:()=>cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }
    insertName(name){
        this.elements.name().should('be.visible').invoke('val',name)
    }
    insertCountry(country){
        this.elements.country().should('be.visible').invoke('val',country)
    }
    insertCity(city){
        this.elements.city().should('be.visible').invoke('val',city)
    }
    insertCard(card){
        this.elements.card().should('be.visible').invoke('val',card)
    }
    insertMonth(month){
        this.elements.month().should('be.visible').invoke('val',month)
    }
    insertYear(year){
        this.elements.year().should('be.visible').invoke('val',year)
    }
    clickOnCloseButton(){
        this.elements.closePlaceOrder().should('be.visible').click();
     }
    clickOnPurchaseButton(){
        this.elements.purchase().should('be.visible').click();
     }

    insertAllDataPlaceOrder (name,country,city,card,month,year){
         this.insertName(name)
         this.insertCountry(country)
         this.insertCity(city)
         this.insertCard(card)
         this.insertMonth(month)
         this.insertYear(year)
     }

}export default PlaceOrder;