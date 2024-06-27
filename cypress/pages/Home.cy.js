class Home{
    
    elements = {
    categoria :(categoria)=> cy.contains("a", categoria),
    producto :(producto)=> cy.contains("a", producto),
    addToCart: () => cy.get('.col-sm-12 > .btn'),
    }

    navegaCategoria(categoria){
        this.elements.categoria(categoria).should('be.visible').click({ force:true });
    }
    abrirProducto(producto){
        this.elements.producto(producto).should('be.visible').click({ force:true })
    }
    anadirProducto(){
        this.elements.addToCart().should('be.visible').click()
    }

}export default Home;