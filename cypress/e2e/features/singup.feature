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

#Scenario: Inicio de sesión inválido
 # Given el usuario navega a la página de inicio
 # When hace clic en "Log in" en la barra de navegación
 # And ingresa un nombre de usuario y/o contraseña inválidos
 # And hace clic en "Log in" para iniciar sesión
 # Then se muestra un mensaje de error indicando que el inicio de sesión ha fallado        