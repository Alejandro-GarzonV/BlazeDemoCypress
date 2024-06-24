import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";


const sing = require("../../pages/Singup.cy")

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given ("un usuario navega a www.demoblaze.com", ()=> {
    cy.visit("/")
});
When ("hace clic en Sign up en la barra de navegacion", ()=> {
    sing.abrirModalSingup();
})
And('ingresa el usuario {word} y la contraseña {word}', (user,pwd) => {
    sing.usuarioImput(user);
    sing.passwordImput(pwd);
});
And('hace clic en Sign up para registrar el usuario', () => {
    sing.clickRegistrar();
});
Then('el usuario es redirigido a la pagina de inicio de sesion', () => {
    cy.wait(1000) ;
});
