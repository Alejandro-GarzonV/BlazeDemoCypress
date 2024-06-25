import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor"
import Login from "../../pages/login.cy";
const loginInstance = new Login();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('Un usuario Navega al modal de login', () => {
   cy.visit('/');
   loginInstance.abrirModalLogin();
});
  
When('joy Ingresa el usuario <word> y la contraseña <word>', (userlog,pwdlog) => {
  loginInstance.usuarioImputLogin(userlog);
  loginInstance.passwordImputLogin(pwdlog);
});
  
And('Hacer clic en el boton Log in para iniciar sesion', () => {
  loginInstance.clickLoginButton();
});
  
Then('Visualiza la pagina de inicio con mensaje de Bienvenida y el nombre de', () => {
    cy.wait(1000);
});