import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";
import singup from "../../pages/SingupPage/singup.cy";
const sing = new singup();

Cypress.on("uncaught:exception", (err, runnable) => {
    return false
})

Given ("Un usuario navega a www.demoblaze.com", ()=> {
    cy.visit("/")
});
When ("Hace clic en Sign up en la barra de navegacion", ()=> {
    sing.abrirModalSingup();
})
And("Ingresa el usuario {word} y la contraseña {word}", (user,pwd) => {
    sing.usuarioImput(user);
    sing.passwordImput(pwd);
});
And("Hace clic en Sign up para registrar el usuario", () => {
    sing.clickRegistrar();
});
Then("El usuario visualiza el mensaje de confirmacion", () => {
    sing.verificarAlertMessage('Sign up successful.')
});
 