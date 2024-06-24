Feature: Registro

  Background: un usuario se registra en la pagina principal
    Given Un usuario navega a www.demoblaze.com

Scenario Outline:Registro de usuario valido
  When Hace clic en Sign up en la barra de navegacion
  And Ingresa el usuario <user> y la contraseña <password>
  And Hace clic en Sign up para registrar el usuario
  Then El usuario visualiza el mensaje de confirmacion
  Examples:
  | user    | password |
  | ABCDEF  | Prueba2  |

#Scenario: Registro de usuario invalido
#    When hace clic en Sign up en la barra de navegacion
#    And ingresa el usuario <user> y la contraseña <password>
#    And hace clic en Sign up para registrar el usuario
#    Then Verificar que se muestra un mensaje de error indicando los campos invalidos   