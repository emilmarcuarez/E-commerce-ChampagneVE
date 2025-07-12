# E-commerce Champagne

Proyecto de tienda en línea desarrollado con Angular (frontend) y Node.js + Express (backend).

## Tecnologías principales
- **Frontend:** Angular
- **Backend:** Node.js + Express
- **Base de datos:** MongoDB Atlas



## Funcionalidades
- Registro e inicio de sesión de usuarios
- Página de inicio con información destacada
- Catálogo de productos y tienda
- Carrito de compras
- Proceso de pago
- Envío del carrito por WhatsApp
- Página de contacto

## Servicios principales
- **AuthService:** Maneja autenticación (login, registro, logout, verificación de sesión)
- **ProductsService:** Obtiene productos, búsqueda y detalles
- **CartService:** Administra el carrito, calcula totales, envía por WhatsApp

## Cómo iniciar el proyecto
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
3. Accede a la app en `http://localhost:4200`

## Backend
El backend se encuentra en la carpeta `backend/` y se desarrolla con Node.js y Express. Se conecta a MongoDB Atlas para almacenar usuarios, productos y pedidos.

## Autor
Emil Marcuarez