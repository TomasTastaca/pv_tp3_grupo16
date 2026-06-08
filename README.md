# pv_tp3_grupo16
Tercer Proyecto- React
## Integrantes del Grupo16
- **[Tastaca Gutierrez Tomas Leandro](https://github.com/TomasTastaca "Tastaca Gutierrez Tomas Leandro")**
- **[Galan Brenda Nahir](https://github.com/brenda-galan04 "Galan Brenda Nahir")**
- **[Timo Marcelo Hernan](https://github.com/marcelohfrt-ops "Timo Marcelo Hernan")**
- **[Velasquez Choque Sara](https://github.com/sarav2313-hue "Velasquez Choque Sara")**
- **[Pablo Frabricio Gaspar](http://github.com/PabloFabricioGaspar26 "Pablo Fabricio Gaspar")**

## Descripción- Trabajo Practico N°3- React
El Trabajo Práctico N.º 3 tiene como objetivo introducir el desarrollo de aplicaciones web modernas utilizando React. Para ello, se toma como base una plataforma de “Gestión de Proyectos Educativos” previamente realizada con HTML y CSS, y se la transforma en una aplicación dinámica e interactiva mediante React y Vite.

A lo largo del práctico se trabaja con la estructura básica de un proyecto React, el uso de JSX para crear interfaces y la organización del código en componentes reutilizables como Header, Nav, Footer y ListaProyectos. También se implementa una capa de servicios en JavaScript para manejar la lógica de la aplicación, permitiendo obtener, agregar, buscar y eliminar proyectos.

Además, se introduce el uso de hooks, especialmente useState, para administrar el estado de la aplicación y actualizar la interfaz automáticamente según las acciones del usuario. Asimismo, se aplican conceptos de programación en JavaScript, como funciones flecha y manejo de arrays, junto con la integración de estilos CSS dentro de un entorno React. El resultado final es una aplicación interactiva, organizada y adaptable a futuras mejoras.
## Descripcion- Trabajo Practico N°3- React parte 2
Esta segunda parte del trabajo práctico se profundizó el uso de React mediante la comunicación entre componentes utilizando props y la organización del código a través de la desestructuración de objetos. A lo largo del desarrollo se implementaron componentes reutilizables como "ProyectoCard.jsx" y "DetalleProyecto.jsx", permitiendo separar responsabilidades y mejorar la estructura general de la aplicación.

Además, se amplió la información de los proyectos incorporando descripciones extendidas, enlaces a recursos y datos del equipo de trabajo, lo que permitió construir una interfaz más completa y dinámica. También se refactorizó el componente principal para evitar repetir HTML dentro del método .map(), logrando un código más limpio, mantenible y fácil de entender.

Esta parte 2 permitió fortalecer conocimientos sobre estados, props, renderizado condicional y manejo de formularios en React.

## Descripcion- Trabajo Practico N°3- React parte 3

El TP 3 Parte 3 consiste en mejorar la aplicación de gestión de proyectos desarrollada en React, incorporando nuevas funcionalidades con el hook useEffect. El objetivo principal es que la aplicación pueda registrar automáticamente cuándo la lista de proyectos fue modificada, ya sea al agregar o eliminar un proyecto, mostrando en pantalla la fecha y hora de la última actualización.

Para esto, se debe crear un componente llamado RegistroActividad, encargado de mostrar un mensaje con el siguiente formato:
“Última actualización de la lista: DD/MM/AAAA a las HH:MM hs.”

Además, el trabajo busca optimizar el comportamiento de la aplicación para evitar que este mensaje aparezca al iniciar la página por primera vez y también impedir que se actualice cuando el usuario utiliza el filtro de búsqueda, ya que esa acción no cambia realmente los datos de la lista. Como apoyo para esta mejora, se propone investigar el uso de useRef como mecanismo de control.

Por otro lado, el TP también requiere reorganizar el código separando el formulario de carga de proyectos en un componente independiente llamado FormularioProyecto.jsx. Este componente deberá administrar sus propios estados internos y luego enviar la información del nuevo proyecto al componente principal mediante funciones pasadas por props.

## Descripcion- Trabajo Practico N°3- React parte 4

En esta etapa del proyecto se incorporó React Router para gestionar la navegación entre las diferentes secciones de la aplicación de manera dinámica y sin recargar la página. Se implementaron rutas para acceder a las vistas principales del sistema, incluyendo el Dashboard, la lista de proyectos, el detalle de cada proyecto y el perfil de usuario, mejorando la organización y la experiencia de navegación.

Además, se integró Material UI como biblioteca de componentes para modernizar la interfaz gráfica y proporcionar una apariencia más profesional y consistente. Se refactorizaron distintos elementos visuales utilizando componentes como Container, Paper, Card, Typography, Box y otros recursos ofrecidos por la biblioteca.

También se reorganizó la estructura del proyecto separando las vistas y componentes en carpetas específicas, favoreciendo la reutilización de código, el mantenimiento de la aplicación y una mejor escalabilidad. Como complemento, se implementaron rutas dinámicas para la visualización de detalles de proyectos mediante parámetros en la URL, permitiendo acceder directamente a la información correspondiente de cada proyecto.

El resultado es una aplicación más estructurada, con una interfaz moderna, navegación fluida y una arquitectura alineada con las buenas prácticas de desarrollo en React.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

