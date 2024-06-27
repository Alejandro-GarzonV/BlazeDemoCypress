Feature: Autenticacion

Scenario Outline: Login de un usuario valido
Given Luis navega al modal de inicio de sesion
When ingresa sus credenciales <user>,<pwd>
And inicia la sesion con un click
Then visualiza usuario y mensaje <mensaje> <user>
Examples:
    | user     | pwd    |mensaje|
    | PruebaF9 |PruebaF9|Welcome|