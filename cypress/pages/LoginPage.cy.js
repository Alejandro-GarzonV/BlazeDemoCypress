
class LoginPage {


    elements = {
        loginLabel:()=>  cy.get('#login2'),
        usuarioImput: () => cy.get("#loginusername"),
        passwordImput: () => cy.get("#loginpassword"),
        closeButton :() => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary') ,
        loginButton :() => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
    };
    
    abrirModalLogin(){
        this.elements.loginLabel().should('be.visible').click({ force: true })
    }
    usuarioImput(usuario) {
        this.elements.usuarioImput().should('be.visible').type(usuario)
    }
    passwordImput(password) {
        this.elements.passwordImput().should('be.visible').type(password)
    }
    cerrarModalLogin() {
        this.elements.closeButton().should('be.visible').click({ force: true })
    }
 
}
module.exports= new LoginPage();
