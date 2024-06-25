Feature: Autenticacion

Background: un usuario se loguea desde la pagina principal 
  Given Un usuario Navega al modal de login
  
  Scenario Outline: Inicio de sesion valido
    When Ingresa el usuario <userlog> y la contraseña <passwordlog>
    And Hacer clic en el boton Log in para iniciar sesion
    Then Visualiza la pagina de inicio con mensaje de Bienvenida y el nombre de
    Examples:
        | userlog      | passwordlog| 
        | prueba900    | prueba900  |