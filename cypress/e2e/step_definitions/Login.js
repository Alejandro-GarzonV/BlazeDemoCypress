import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor"
import Login from "../../pages/login.cy";
const loginInstance = new Login();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('Luis navega al modal de inicio de sesion',()=> {
  cy.visit('/');
  loginInstance.abrirModalLogin();
})
When("ingresa sus credenciales {word},{word}",(user,password)=>{
  loginInstance.usuarioImputLogin(user);
  loginInstance.passwordImputLogin(password);
})
And('inicia la sesion con un click',()=>{
  loginInstance.clickLoginButton();
})
Then ('visualiza usuario y mensaje {word} {word}',(mensaje,Usuario)=>{
  loginInstance.validarLoginExitoso(mensaje,Usuario)
  cy.wait(2000)
})