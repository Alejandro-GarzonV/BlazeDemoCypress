import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";

const login = require ("../../pages/login.cy");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
/*
Given('Un usuario Navega a la pagina de inicio', () => {
    cy.visit('/');
});
  
When('Hace clic en Log in en la barra de navegacion', () => {
   //login.abrirModalLogin();
});
  
And('Ingresa el usuario {word} y la contraseña {word}', (user, password) => {
  // login.usuarioImputLogin(user);
   //login.passwordImputLogin(password);
});
  
And('Hacer clic en el boton Log in para iniciar sesion', () => {
   //login.clickLoginButton();
});
  
Then('Verificar que se redirige al usuario a la pagina de inicio', () => {
    
});*/