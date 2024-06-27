class Home{
    
    elements = {
    categoria :(categoria)=> cy.contains("a", categoria),
    producto :(producto)=> cy.contains("a", producto),
    }
    navegaCategoria(categoria){
        this.elements.categoria(categoria).should('be.visible').click({ force:true });
    }
    abrirProducto(producto){
        this.elements.producto(producto).should('be.visible').click({ force:true })
    }


}export default Home;