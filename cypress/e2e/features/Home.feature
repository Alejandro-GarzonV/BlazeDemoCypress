Feature: Navegar y Agregar 

Background: Navegar al home de la pagina
    Given un usuario en el homepage 

Scenario Outline: LLenar carrito con productos de diferentes categorias
When navega a la categoria <categoria>
And abre el detalle del producto <producto>
And agrega el producto al carrito
Then confirma mediante el mensaje
Examples:
    | categoria | producto     |
    | Phones    | "Nexus 6"    |
    | Laptops  | "MacBook Pro" |
    | Monitors | "ASUS Full HD"|

