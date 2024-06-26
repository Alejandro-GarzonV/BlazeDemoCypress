Feature: Registro

Background: Registro de usuario valido
    Given un usuario navega al registro de usuarios Sing up

Scenario Outline:Registro de usuario valido
  When ingresa el usuario <user> y la contraseña <password>
  And hace clic en Sign up para registrar el usuario
  Then el usuario visualiza el mensaje de confirmacion
  Examples:
  | user    | password |
  | ABCDEF  | Prueba2  |
