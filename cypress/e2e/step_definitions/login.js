import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";
import login from '../../pages/LoginPage/login.cy';
const loginconst = new login();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('Un usuario Navega al modal de login', () => {
    cy.visit('/');
   // login.abrirModalLogin();
    loginconst.abrirModalLogin();
});
  
When('Ingresa el usuario <userlog> y la contraseña <passwordlog>', (userlog,pwdlog) => {
  loginconst.usuarioImputLogin(userlog);
  loginconst.passwordImputLogin(pwdlog);
});
  
And('Hacer clic en el boton Log in para iniciar sesion', () => {
  loginconst.clickLoginButton();
});
  
Then('Verificar que se redirige al usuario a la pagina de inicio', () => {
    
});