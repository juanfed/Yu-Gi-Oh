# Yu-Gi-Oh Card Manager

Aplicacion web desarrollada como proyecto de aprendizaje personal para aplicar y afianzar conocimientos en **JavaScript** y **React**. A lo largo del desarrollo explore conceptos como manejo de estado global con Redux, consumo de APIs REST, autenticacion con OAuth, enrutamiento con React Router y persistencia de datos con localStorage.

La app permite iniciar sesion, explorar cartas de Yu-Gi-Oh obtenidas desde una API publica, armar tu propio mazo personal y gestionar tu perfil de usuario.

> Demo en vivo: [https://juanfed.github.io/Yu-Gi-Oh](https://juanfed.github.io/Yu-Gi-Oh)

---

## Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| React 17 | Framework principal de UI |
| Redux + Redux Thunk | Manejo de estado global y acciones asincronas |
| React Router DOM v6 | Enrutamiento y rutas protegidas |
| Axios | Consumo de la API de cartas |
| React Google Login | Autenticacion con Google OAuth |
| React Facebook Login | Autenticacion con Facebook OAuth |
| EmailJS | Envio de mensajes desde el formulario de contacto |
| CSS puro | Estilos personalizados por pagina |
| localStorage | Persistencia de mazo, perfil y sesion |
| GitHub Pages | Deploy de la aplicacion |

---

## Funcionalidades

- **Login** con cuenta de Google o Facebook
- **Explorar cartas** aleatorias obtenidas de la [YGOProDeck API](https://db.ygoprodeck.com/api-guide/)
- **Armar mazo** agregando hasta 6 cartas a tu coleccion personal
- **Mi mazo** — ver, gestionar y eliminar cartas de tu coleccion
- **Perfil** — visualizar datos del usuario y guardar numero de WhatsApp
- **Contacto** — formulario funcional con envio de emails via EmailJS
- Rutas privadas protegidas que redirigen al login si no hay sesion activa

---

## Estructura de carpetas

```
Yu-Gi-Oh/
├── public/
│   ├── index.html
│   └── favicon.ico
└── src/
    ├── assets/            # Imagenes estaticas (logo de login, etc.)
    ├── components/        # Componentes reutilizables
    │   ├── Card.jsx       # Componente de carta individual
    │   ├── Header.jsx     # Header publico
    │   ├── HeaderPrivate.jsx
    │   ├── Footer.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   └── NoFound.jsx    # Pagina 404
    ├── images/            # Imagenes de la app
    ├── Layouts/
    │   └── Private.jsx    # Layout protegido (rutas admin)
    ├── pages/             # Paginas principales
    │   ├── Home.jsx       # Landing / Login
    │   ├── Cards.jsx      # Explorador de cartas
    │   ├── MyCards.jsx    # Mazo personal
    │   ├── Profile.jsx    # Perfil del usuario
    │   └── Contact.jsx    # Formulario de contacto
    ├── redux/             # Manejo de estado global
    │   ├── store.js
    │   ├── action/
    │   │   └── consultarAction.js
    │   ├── reducers/
    │   │   ├── index.js
    │   │   └── consultarReducer.js
    │   └── types/
    │       └── index.js
    ├── styles/            # Archivos CSS por pagina
    ├── App.js             # Rutas y estructura principal
    └── index.js           # Punto de entrada
```

---

## Como correr el proyecto en local

### Requisitos previos

- [Node.js](https://nodejs.org/) v14 o superior
- npm (viene incluido con Node.js)

### Pasos

**1. Clonar el repositorio**

```bash
git clone https://github.com/juanfed/Yu-Gi-Oh.git
cd Yu-Gi-Oh
```

**2. Instalar dependencias**

```bash
npm install
```

**3. Iniciar el servidor de desarrollo**

```bash
npm start
```

La aplicacion se abrira automaticamente en [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Comando | Descripcion |
|---|---|
| `npm start` | Inicia la app en modo desarrollo |
| `npm run build` | Genera el build de produccion en `/build` |
| `npm test` | Ejecuta los tests |
| `npm run deploy` | Despliega en GitHub Pages |

---

## Notas

- La autenticacion con Google y Facebook usa OAuth pero **no tiene backend propio** — los datos de sesion se guardan en `localStorage`.
- El mazo personal tambien se persiste en `localStorage`, por lo que los datos se mantienen entre sesiones en el mismo navegador.
- La API de cartas utilizada es publica y no requiere API key: [YGOProDeck](https://db.ygoprodeck.com/api-guide/).

---

## Aprendizajes aplicados

Este proyecto fue una oportunidad para practicar de forma real:

- Arquitectura de componentes en React (contenedores vs presentacionales)
- Flujo unidireccional de datos con Redux
- Manejo de side effects asincronos con Redux Thunk
- Proteccion de rutas con React Router v6
- Integracion de servicios externos (OAuth, EmailJS)
- Deploy continuo con GitHub Pages

---

*Proyecto personal de aprendizaje — Juan Fernando y Federico*