# 🌟 Proyecto con Vite

Este repositorio utiliza **Vite**, un moderno sistema de construcción para proyectos web que ofrece tiempos de inicio rápidos, HMR (Hot Module Replacement) y una experiencia de desarrollo más fluida.

---

## 📖 ¿Qué es Vite?

[Vite](https://vitejs.dev/) es una herramienta de desarrollo front-end diseñada para optimizar el desarrollo web moderno. Ofrece:

- Tiempo de inicio rápido mediante la preconstrucción de dependencias.
- Actualizaciones instantáneas con Hot Module Replacement (HMR).
- Soporte nativo para ES Modules.

---

## 🚀 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (descárgalo desde [Node.js](https://nodejs.org/))

---

## 🛠️ Instalación

1. Clona el repositorio:
```
   git clone https://github.com/DuskStarGITHUB/Coding
   cd Coding
```
2. Instala las dependencias:
```
   npm install
```
---

## 📂 Estructura del proyecto

El archivo `package.json` contiene información sobre las dependencias y scripts del proyecto. Algunos scripts comunes definidos son:

- **dev**: Inicia el servidor de desarrollo con Vite.
- **build**: Construye el proyecto para producción.
- **preview**: Previsualiza la versión construida del proyecto.

---

## 💻 Comandos útiles

### Comandos básicos

- Iniciar servidor de desarrollo:
```
  npm run dev
```
- Iniciar servidor de desarrollo accesible en red local (para otros dispositivos):
```
  npm run dev -- --host
```
- Construir para producción:
```
  npm run build
```
- Previsualizar la construcción de producción:
```
  npm run preview
```
### Información del entorno

- Ver la versión de Vite:
```
  npx vite --version
```
- Lista de dependencias del proyecto:
```
  npm list
```
### Limpieza y actualización

- Eliminar la carpeta node_modules y reinstalar dependencias:
```
  rm -rf node_modules
  npm install
```

- Actualizar las dependencias a sus últimas versiones compatibles:
```
  npm update
```
---

## 📱 Acceso desde dispositivos móviles

Para acceder al servidor desde un dispositivo móvil:

1. Obtén la dirección IP de tu máquina:

   - En Windows, ejecuta `ipconfig` en el terminal.
   - En Linux o Mac, ejecuta `ifconfig`.

2. Inicia Vite con:
```
   npm run dev -- --host
```
3. Desde el navegador del móvil, introduce la URL en formato:
   http://tu-ip-local:5173/

---

## 📚 Recursos adicionales

- Documentación oficial de Vite: [https://vitejs.dev/](https://vitejs.dev/)
- Preguntas frecuentes: [FAQ de Vite](https://vitejs.dev/guide/faq.html)

---
