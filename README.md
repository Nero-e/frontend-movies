# Candela Soft Movie

## Tecnologías Utilizadas

- **React** (con Vite y Typescript) - Versión 19
- **Tailwind CSS** - Versión 4.0
- **Redux Toolkit** (para manejo de estado global y API calls con RTK Query)
- **react-infinite-scroll-component** (para manejo del scroll)
- **react-router-dom** (para manejo de rutas dinámicas)



## Instalación

Para instalar las dependencias, simplemente ejecuta el siguiente comando en la terminal:

```sh
npm i
```

## Configuración del Entorno

Antes de ejecutar la aplicación, debes crear un archivo `.env` en la raíz del proyecto y agregar la siguiente variable:

```
VITE_API_TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmU1NjM1YzdjMzNkZDRjMDdjZDMzZTMyMGI5MTRmMSIsIm5iZiI6MTcyNDgyNzc4My42Nywic3ViIjoiNjZjZWM4ODcwYmEwNzMxN2FlMTE5MTQzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0OV4kKguJvC6Z6ekFbB6AYKoyqKeUQzWtrcOh9H3IOo
```

## Descripción del Proyecto

Esta aplicación utiliza la API de **TMDB** para obtener información sobre películas y otros contenidos relacionados. Se manejan las peticiones a la API con **Redux Toolkit Query**, y los estados globales se gestionan con **Redux Toolkit**.

### Características Principales

- **Lista de Películas:** Al iniciar, se muestran las primeras 20 películas populares.
- **Filtros de Género y Año:** Permiten personalizar los resultados mostrados.
- **Búsqueda:** Input para buscar películas por nombre.
- **Scroll Infinito:** Al hacer scroll, se cargan más películas automáticamente.
- **Dark Mode:** Soporte para modo oscuro.
- **Detalles de Películas:** Al hacer clic en el título de una película, se muestra su detalle.
- **Galería de Películas:** Página separada que muestra una galería con todas las películas sin filtros adicionales.

## Ejecución del Proyecto

Para iniciar la aplicación en modo desarrollo, ejecuta:

```sh
npm run dev
```

