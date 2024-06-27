class PlaceOrder {

    elements = {
        namePlaceOrder:()=> cy.get('#name'),
        countryPlaceOrder:()=>cy.get('#country'),
        cityPlaceOrder:()=>cy.get('#city'),
        cardPlaceOrder:()=>cy.get('#card'),
        monthPlaceOrder:()=>cy.get('#month'),
        yearPlaceOrder:()=>cy.get('#year'),
        buttonPurchasePlaceOrder:()=>cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        closePlaceOrder:()=>cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }
    insertName(name){
        this.elements.namePlaceOrder().should('be.visible').invoke('val',name).trigger('input');
    }
    insertCountry(country){
        this.elements.countryPlaceOrder().should('be.visible').invoke('val',country).trigger('input');
    }
    insertCity(city){
        this.elements.cityPlaceOrder().should('be.visible').invoke('val',city).trigger('input');
    }
    insertCard(card){
        this.elements.cardPlaceOrder().should('be.visible').invoke('val',card).trigger('input');
    }
    insertMonth(month){
        this.elements.monthPlaceOrder().should('be.visible').invoke('val',month).trigger('input');
    }
    insertYear(year){
        this.elements.yearPlaceOrder().should('be.visible').invoke('val',year).trigger('input');
    }
    clickOnCloseButton(){
        this.elements.closePlaceOrder().should('be.visible').click();
     }
    clickOnPurchaseButton(){
        this.elements.buttonPurchasePlaceOrder().should('be.visible').click();
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