Feature: Navegar categorias

Background: Navegar al home de la pagina y navegar las categorias
    Given un usuario en el homepage 

Scenario Outline: navegar las diferentes categorias
When navega a la categoria <categoria>
Then confirma existencia de producto <producto>
Examples:
    | categoria| producto      |
    | Phones   | "Nexus 6"     |
    | Laptops  | "MacBook Pro" |
    | Monitors | "ASUS Full HD"|

