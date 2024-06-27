import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"
import Home from "../../pages/Home.cy"
import Singup from "../../pages/Singup.cy";
const Hom = new  Home();
const sing= new Singup();

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

And ('abre el detalle del producto {string}',(producto)=>{
    Hom.abrirProducto(producto);
})
And('agrega el producto al carrito',()=>{
    Hom.anadirProducto();
})
Then('confirma mediante el mensaje',()=>{
 sing.verificarAlertMessage('Product added');
})
