import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"
import Home from "../../pages/Home.cy"

const Hom = new  Home();


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('un usuario en el homepage',()=>{
    cy.visit('/');
})
When('navega a la categoria {word}',(categoria)=>{
    //const categoria='Phones'
    Hom.navegaCategoria(categoria);
})
Then('confirma existencia de producto {string}',(producto)=>{
   Hom.abrirProducto(producto);
})
