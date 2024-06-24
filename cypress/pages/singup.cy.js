class singup {

    elements = {
        singupLabel:()=> cy.get('#signin2'),
        singupUsuarioImput: () => cy.get('#sign-username') ,
        singupPasswordImput: () =>cy.get ('#sign-password') ,
        singupCloseButton :() => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary') ,
        singupButton :() =>cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'), 
    };
        
        abrirModalSingup(){
            this.elements.singupLabel().should('be.visible').click({ force: true })
        }

        generarNombreAleatorio() {// Almacena el nombre aleatorio generado  es temporal 
            const letras = 'abcdefghijklmnopqrstuvwxyz';
            let nombre = '';
    
            // Genera un nombre aleatorio de longitud entre 5 y 10 caracteres
            const longitudNombre = Math.floor(Math.random() * 6) + 5;
    
            for (let i = 0; i < longitudNombre; i++) {
                const indice = Math.floor(Math.random() * letras.length);
                nombre += letras.charAt(indice);
            }
    
            this.nombreAleatorio = nombre; 
            return nombre;
        }// borrar entre comentarios

        singupUsuarioImput(usuario) {
            // condigo temporal para pruebas debido a que  el nombre se quema  en la page
            console.log('Nombre de usuario esrito:', usuario);
            const nombre =this.generarNombreAleatorio();
            console.log('Nombre de usuario aleatorio:', nombre);
            //borrar hacia arriba entre comentarios
            
            this.elements.singupUsuarioImput().should('be.visible',).invoke('val', nombre).trigger('input');
        }
        singupPasswordImput(password) {
            this.elements.singupPasswordImput().should('be.visible').invoke('val', password).trigger('input');
        }
        cerrarModalLogin() {
            this.elements.closeButton().should('be.visible').click({ force: true })
        }
        singupClickRegistrar() {
            this.elements.singupButton().should('be.visible').click({ force: true })
        }
        verificarAlertMessage(expectedMessage) {
            cy.on('window:alert', (actualMessage) => {
              expect(actualMessage).to.equal(expectedMessage);
            });
          }
}
//module.exports = new singup();
export default singup;
