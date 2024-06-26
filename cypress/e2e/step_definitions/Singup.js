import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";
import Singup from "../../pages/Singup.cy";
const sing =new Singup();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given ('un usuario navega al registro de usuarios Sing up',()=>{
    cy.visit('/');
    sing.abrirModalSingup();
})
When('ingresa el usuario {word} y la contraseña {word}',(user,passw)=>{
  sing.singupUsuarioImput(user);
  sing.singupPasswordImput(passw);
})
And('hace clic en Sign up para registrar el usuario',()=>{
   sing.singupClickRegistrar();
})
Then('el usuario visualiza el mensaje de confirmacion',()=>{
   sing.verificarAlertMessage('Sign up successful.');
})