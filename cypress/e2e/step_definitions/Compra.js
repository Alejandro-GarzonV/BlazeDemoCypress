import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"
import Home from "../../pages/Home.cy";
import ProducDetails from "../../pages/ProducDetails.cy";
import PlaceOrder from "../../pages/PlaceOrder.cy";
import Cart from "../../pages/Cart.cy";
import Purchase from "../../pages/Purchase.cy";

const Purch = new Purchase();
const CartC = new Cart();
const Po = new PlaceOrder();
const Pd = new ProducDetails();
const HomC = new  Home();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
Given('un usuario en el home del sitio',()=>{
    cy.visit('/');
})
When ('ingresa a una categoria {word} y selecciona el producto {string}',(categoria,producto)=>{
    HomC.navegaCategoria(categoria);
    HomC.abrirProducto(producto);
})
And('agrega el producto al carrito',()=>{
    Pd.anadirProducto();
    Pd.irAlCarrito();
})
And('genera la orden con el producto',()=>{
    CartC.clickPlaceOrderButton();
})
And('diligencia la orden con los datos {string} {word} {word} {word} {word} {word} y acepta la compra',(name,country,city,card,month,year)=>{
    Po.insertAllDataPlaceOrder(name,country,city,card,month,year);
    Po.clickOnPurchaseButton();
})
Then('cierra el mensaje de compra despues de visualizarlo',()=>{
    Purch.mensajeCompra();
})