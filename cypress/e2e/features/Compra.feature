Feature: Realizar una compra

Scenario Outline: Compra de un producto
Given un usuario en el home del sitio
When ingresa a una categoria y selecciona el producto
And agrega el producto al carrito
And acepta la orden con el producto
And diligencia los datos de la orden y la acepta
Then cierra el mensaje de compra despues de visualizarlo
Examples:
    | Header 1 | Header 2 | Header 3 |
    | Value 1  | Value 2  | Value 3  |