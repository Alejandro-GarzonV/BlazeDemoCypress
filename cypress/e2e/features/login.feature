Feature: Autenticacion

Background: un usuario se loguea desde la pagina principal 
  Given Un usuario Navega al modal de login
  
  Scenario Outline: Inicio de sesion valido
    When Ingresa el usuario <userlog> y la contraseña <passwordlog>
    And Hacer clic en el boton Log in para iniciar sesion
    Then Visualiza la pagina de inicio con mensaje de Bienvenida y el nombre de <userlog>
    Examples:
        | userlog      | passwordlog| 
        | prueba900    | prueba900  |

#  Scenario: Inicio de sesion invalido
#     Given Navegar a la pagina de inicio
#     When Hacer clic en "Log in" en la barra de navegacion
#     And Ingresar un nombre de usuario y/o contrasena invalidos
#     And Hacer clic en "Log in" para iniciar sesion
#     Then Verificar que se muestra un mensaje de error indicando que el inicio de sesion ha fallado
