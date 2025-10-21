# 🥗 Healthy Market App

![Healthy Market](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-success?logo=mongodb)
![Status](https://img.shields.io/badge/Status-Active-success)

Un **E-commerce de comida saludable** moderno y completo, desarrollado como proyecto de aprendizaje en equipo utilizando metodologías ágiles y herramientas profesionales de desarrollo.

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Tech Stack](#-tech-stack)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Metodología de Desarrollo](#-metodología-de-desarrollo)
- [Equipo](#-equipo)
- [Licencia](#-licencia)

---

## 🎯 Acerca del Proyecto

Este proyecto está enfocado principalmente en **aprender a trabajar en equipo** (8 miembros) utilizando herramientas y metodologías profesionales como:

- ✅ **Scrum** - Metodología ágil
- ✅ **Git Flow** - Control de versiones
- ✅ **Trello** - Gestión de tareas
- ✅ **Slack** - Comunicación del equipo
- ✅ **Figma** - Diseño UI/UX

### 👤 Funcionalidades para Usuarios

- 🔍 **Búsqueda avanzada** con múltiples filtros
- 🛒 **Carrito de compras** intuitivo
- ⭐ **Sistema de reseñas** para productos
- 🔐 **Autenticación múltiple** (Google OAuth y Email)
- 💳 **Pagos seguros** con Mercado Pago
- 📧 **Notificaciones por email** (bienvenida, confirmación de compra, etc.)

### 👨‍💼 Funcionalidades para Administradores

- 📊 **Dashboard con estadísticas** (gráficos mensuales y anuales)
- 📈 **Visualización de datos** con gráficos interactivos
- ✏️ **CRUD completo** de productos, usuarios y pedidos
- 📦 **Gestión de inventario** (archivar/pausar publicaciones)
- 👥 **Administración de usuarios**

---

## ✨ Características Principales

| Característica | Descripción |
|----------------|-------------|
| 🌐 **Responsive** | Diseño adaptable a todos los dispositivos |
| 🔒 **Seguridad** | JWT, Firebase Auth, bcrypt |
| 💰 **Pagos** | Integración con Mercado Pago |
| 📱 **Real-time** | Notificaciones y actualizaciones en tiempo real |
| 🎨 **UI Moderna** | Interfaz atractiva con Tailwind CSS y Material-UI |
| 📧 **Email** | Sistema automatizado de correos con Nodemailer |
| ☁️ **Cloud Storage** | Almacenamiento de imágenes con Cloudinary |

---

## 🛠️ Tech Stack

### Frontend

```
⚛️  React 18.2.0          - Librería principal
🔄  Redux Toolkit         - Gestión de estado
🛣️  React Router v6       - Enrutamiento
🎨  Tailwind CSS          - Estilos y diseño
🧩  Material-UI (MUI)     - Componentes UI
📊  Recharts              - Gráficos y estadísticas
🔔  React Toastify        - Notificaciones
🔥  Firebase Auth         - Autenticación
```

### Backend

```
🟢  Node.js               - Runtime
⚡  Express               - Framework web
🍃  MongoDB + Mongoose    - Base de datos
🔐  JWT                   - Tokens de autenticación
🔥  Firebase Admin        - Servicios Firebase
📧  Nodemailer            - Envío de emails
💳  Mercado Pago SDK      - Procesamiento de pagos
☁️  Cloudinary            - Almacenamiento de imágenes
🔑  Passport.js           - Estrategias de autenticación
```

### Herramientas de Desarrollo

- **Git & GitHub** - Control de versiones
- **Trello** - Gestión de proyecto
- **Slack** - Comunicación
- **Figma** - Diseño UI/UX
- **Vercel Analytics** - Análisis de rendimiento

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v14 o superior)
- **npm** o **yarn**
- **MongoDB** (local o MongoDB Atlas)
- **Git**

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/EdgarFav/Healthy-Market-App.git
cd Healthy-Market-App
```

### 2. Configurar el Backend

```bash
cd server
npm install
```

Crea un archivo `.env` en la carpeta `server` con las siguientes variables:

```env
PORT=3001
MONGODB_URI=tu_mongodb_uri
JWT_SECRET=tu_secret_key
FIREBASE_CONFIG=tu_firebase_config
MERCADO_PAGO_ACCESS_TOKEN=tu_token_mercado_pago
EMAIL_USER=tu_email
EMAIL_PASSWORD=tu_password
CLOUDINARY_URL=tu_cloudinary_url
```

### 3. Configurar el Frontend

```bash
cd ../client
npm install
```

Crea un archivo `.env` en la carpeta `client`:

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_FIREBASE_API_KEY=tu_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
```

---

## 🎮 Uso

### Modo Desarrollo

#### Iniciar el servidor backend:

```bash
cd server
npm run dev
```

El servidor estará disponible en `http://localhost:3001`

#### Iniciar la aplicación frontend:

```bash
cd client
npm start
```

La aplicación estará disponible en `http://localhost:3000`

### Modo Producción

#### Build del frontend:

```bash
cd client
npm run build
```

#### Iniciar el servidor:

```bash
cd server
npm start
```

---

## 📁 Estructura del Proyecto

```
Healthy-Market-App/
├── client/                   # Aplicación React
│   ├── public/              # Archivos estáticos
│   ├── src/
│   │   ├── actions/         # Redux actions
│   │   ├── components/      # Componentes React
│   │   │   ├── admin/       # Panel de administración
│   │   │   └── ...
│   │   ├── slices/          # Redux slices
│   │   ├── store/           # Configuración Redux
│   │   ├── pictures/        # Imágenes y assets
│   │   ├── App.js           # Componente principal
│   │   └── index.js         # Punto de entrada
│   └── package.json
│
├── server/                   # API Node.js
│   ├── controllers/         # Controladores
│   ├── models/              # Modelos de MongoDB
│   ├── routes/              # Rutas de la API
│   ├── services/            # Lógica de negocio
│   ├── middleware/          # Middlewares
│   ├── utils/               # Utilidades
│   ├── index.js             # Punto de entrada
│   └── package.json
│
└── README.md                 # Este archivo
```

---

## 📚 Metodología de Desarrollo

Este proyecto fue desarrollado siguiendo las mejores prácticas de desarrollo en equipo:

- **Scrum**: Sprints de 2 semanas con daily standups
- **Git Flow**: Ramas feature, develop y main
- **Code Review**: Pull requests revisados por el equipo
- **Testing**: Pruebas unitarias y de integración
- **Documentación**: Código documentado y README actualizado

---

## 👥 Equipo

Este proyecto fue desarrollado por un equipo de **8 desarrolladores** trabajando de forma colaborativa y aplicando metodologías ágiles.

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias o mejoras.

---

## 📞 Contacto

Para más información sobre el proyecto, puedes contactar al equipo de desarrollo.

---

**Desarrollado con ❤️ por el equipo de Healthy Market**
