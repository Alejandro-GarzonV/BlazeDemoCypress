class login {
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
    usuarioImputLogin(usuario) {
        this.elements.usuarioImput().should('be.visible').invoke('val', usuario).trigger('input');
    }
    passwordImputLogin(password) {
        this.elements.passwordImput().should('be.visible').invoke('val', password).trigger('input');
    }
    cerrarModalLogin() {
        this.elements.closeButton().should('be.visible').click({ force: true })
    }
    clickLoginButton() {
        this.elements.closeButton().should('be.visible').click({ force: true })
    }
}
module.exports=new login();
