Taller React API — Proyecto Front End
Autor: Gustavo Bugueno
Tecnologías: React + Vite + Hooks + CSS + LocalStorage
API utilizada: Studio Ghibli API
Despliegue: Vercel

🚀 Descripción del proyecto
Este proyecto corresponde al Taller React API del curso Programación Front End.
El objetivo es desarrollar una aplicación web que permita:

Cargar elementos desde una API pública.

Buscar elementos mediante una barra de búsqueda.

Marcar elementos como favoritos.

Bloquear elementos para ocultarlos del listado.

Mantener favoritos y bloqueados en localStorage.

Mostrar estadísticas (totales, favoritos, bloqueados).

Ser completamente responsivo (móvil, tablet y escritorio).

La aplicación fue desarrollada con React + Vite, utilizando componentes funcionales y hooks personalizados.

🔗 API utilizada
Se utiliza la API pública de Studio Ghibli:

Código
https://ghibliapi.vercel.app/films
Los datos se consumen mediante un hook propio useFetch, que maneja:

Estado de carga (loading)

Estado de error (error)

Datos (data)

🧩 Funcionalidades principales
Listado dinámico de películas con imagen y título.

Barra de búsqueda con filtrado en tiempo real.

Favoritos: agregar, quitar y mostrar en panel lateral.

Bloqueados: ocultar elementos del listado y desbloquearlos.

Persistencia en localStorage para favoritos y bloqueados.

Estadísticas: totales, favoritos y bloqueados.

Diseño responsivo con media queries.

Despliegue en Vercel con auto‑deploy desde GitHub.

🛠️ Tecnologías utilizadas
React

Vite

JavaScript

Hooks (useState, useEffect)

Hook personalizado (useFetch)

CSS responsivo

LocalStorage

Vercel (deploy)

📦 Instalación y ejecución
Clonar el repositorio:

Código
git clone [https://github.com/tuusuario/tu-repo.git](https://github.com/gustavobugeno/mi-proyecto.git)
Instalar dependencias:

Código
npm install
Ejecutar en modo desarrollo:

Código
npm run dev
Construir para producción:

Código
npm run build
🌐 Deploy
El proyecto está desplegado en Vercel:

👉 [https://mi-proyecto-three-opal.vercel.app/](https://mi-proyecto-three-opal.vercel.app/)

Cada git push genera un nuevo deployment automático.

👨‍💻 Autor
Gustavo Bugueno  
Desarrollador Front End — React + Vite

📄 Notas del template original de Vite
Este proyecto fue creado con el template oficial de React + Vite, que incluye:

HMR (Hot Module Replacement)

ESLint básico

Plugins oficiales:

@vitejs/plugin-react

@vitejs/plugin-react-swc
