import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";
import login from '../../pages/login.cy';
const loginInstance = new login();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('Un usuario Navega al modal de login', () => {
    cy.visit('/');
   // login.abrirModalLogin();
   loginInstance.abrirModalLogin();
});
  
When('Ingresa el usuario <userlog> y la contraseña <passwordlog>', (userlog,pwdlog) => {
  loginInstance.usuarioImputLogin(userlog);
  loginInstance.passwordImputLogin(pwdlog);
});
  
And('Hacer clic en el boton Log in para iniciar sesion', () => {
  loginInstance.clickLoginButton();
});
  
Then('Verificar que se redirige al usuario a la pagina de inicio', () => {
    
});