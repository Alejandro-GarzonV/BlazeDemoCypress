Feature: Registro y Autenticación

  Background: un usuario esta en la pagina principal 
    Given un usuario navega a www.demoblaze.com

Scenario Outline:Registro de usuario valido
    When hace clic en Sign up en la barra de navegacion
    And ingresa el usuario <user> y la contraseña <password>
    And hace clic en Sign up para registrar el usuario
    Then el usuario es redirigido a la pagina de inicio de sesion
    Examples:
        | user    | password | 
        | ABCDEFGHIJkm | Prueba2  |

Scenario: Registro de usuario invalido
    When hace clic en Sign up en la barra de navegacion
    And ingresa el usuario <user> y la contraseña <password>
    And hace clic en Sign up para registrar el usuario
    Then Verificar que se muestra un mensaje de error indicando los campos invalidos   