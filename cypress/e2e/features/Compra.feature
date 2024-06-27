Feature: Realizar una compra

Scenario Outline: Compra de un producto
Given un usuario en el home del sitio
When ingresa a una categoria <categoria> y selecciona el producto <producto>
And agrega el producto al carrito
And genera la orden con el producto
And diligencia la orden con los datos <name> <country> <city> <card> <month> <year> y acepta la compra
Then cierra el mensaje de compra despues de visualizarlo
Examples:
    |categoria|producto |name              |country |city  |card            |month|year|
    |Phones   |"Nexus 6"|"alejandro garzon"|colombia|Bogota|4239383687554316| 06  |2024|