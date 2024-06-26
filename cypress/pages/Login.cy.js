class Login {
    elements = {
        loginLabel:()=>  cy.get('#login2'),
        loginUsuarioImput: () => cy.get("#loginusername"),
        loginPasswordImput: () => cy.get("#loginpassword"),
        loginCloseButton :() => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary') ,
        loginButton :() => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        msjWelcome:() => cy.get('#nameofuser')
    };
    
    abrirModalLogin(){
        this.elements.loginLabel().should('be.visible').click({ force: true })
    }
    usuarioImputLogin(userlogin) {
        this.elements.loginUsuarioImput().should('be.visible').invoke('val', userlogin).trigger('input');
    }
    passwordImputLogin(pwdlogin) {
        this.elements.loginPasswordImput().should('be.visible').invoke('val', pwdlogin).trigger('input');
    }
    cerrarModalLogin() {
        this.elements.loginCloseButton().should('be.visible').click({ force: true })
    }
    clickLoginButton() {
        this.elements.loginButton().should('be.visible').click({ force: true })
    }
    validarLoginExitoso(mensaje){
        this.elements.msjWelcome().should('be.visible').and('contain.text', mensaje);
    }
}
export default Login;