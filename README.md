# Prueba Técnica - Desarrollador Full Stack

## Descripción del Proyecto
Esta prueba técnica consiste en desarrollar un microservicio en Node.js con Express que se conecta a una base de datos PostgreSQL y expone datos que son consumidos por un frontend en Angular.  
Además, se incluye un CRUD en Java que permite insertar, modificar, eliminar y consultar usuarios directamente desde la aplicación Java.  
El proyecto permite crear, leer, actualizar y eliminar registros de usuarios desde Node.js, Angular y Java.

## Tecnologías Utilizadas
- Backend: Node.js, Express, pg (PostgreSQL client), nodemon, TypeScript, dotenv, cors, Sequelize  
- Base de datos: PostgreSQL  
- Frontend: Angular, Bootstrap o Angular Material  
- Backend Java: Java 17+, JDBC  
- Herramientas adicionales: Postman, Docker (opcional)  

## Estructura de la Base de Datos
Tabla: `usuarios`  

- id: SERIAL PRIMARY KEY  
- nombre: VARCHAR(100)  
- correo: VARCHAR(100)  
- edad: INT  

SQL para crear la tabla:

CREATE TABLE usuarios (  
  id SERIAL PRIMARY KEY,  
  nombre VARCHAR(100),  
  correo VARCHAR(100),  
  edad INT  
);

## Instalación y Ejecución

### 1. Backend Node.js
1. Clonar el repositorio y entrar en la carpeta backend:  
   `git clone <URL_DEL_REPOSITORIO>`  
   `cd backend`  

2. Instalar dependencias del proyecto:  
   `npm install`  

3. Instalar globalmente nodemon si no está instalado:  
   `npm install -g nodemon`  

4. Dependencias principales del backend:  
   - nodemon  
   - TypeScript  
   - express  
   - dotenv  
   - cors  
   - sequelize  

   Estas se instalan automáticamente con `npm install`, pero si deseas instalar alguna globalmente, puedes usar `npm install -g <paquete>`.  

5. Configurar el puerto del servidor en `.env`:  
   PORT=3000  
   **Nota:** La configuración de la base de datos (usuario, contraseña y nombre de la base) se encuentra en `src/db/connection.ts`. No es necesario modificar `.env` para la conexión.  

6. Ejecutar el servidor en modo desarrollo:  
   `nodemon --watch .`  
   La API estará disponible en: http://localhost:3000/api/data  

### 2. Frontend Angular
1. Entrar a la carpeta frontend: `cd frontend`  
2. Instalar dependencias: `npm install`  
3. Ejecutar Angular: `ng serve`  
   La aplicación estará disponible en: http://localhost:4200  

### 3. Backend Java (CRUD)
El proyecto Java incluye **dos ejecutables**:  

- **Consola:** ubicado en `main/java/app`  
- **Interfaz gráfica:** ubicado en `main/java/visual`  

#### Ejecución del CRUD en Java

1. Entrar a la carpeta del proyecto Java correspondiente al ejecutable:  
   - Consola: `cd main/java/app`  
   - Interfaz gráfica: `cd main/java/visual`  

2. Compilar: `javac -cp postgresql-<version>.jar:. *.java`  
3. Ejecutar: `java -cp postgresql-<version>.jar:. Main`  

CRUD en Java:  
- **Crear usuario:** Inserta un nuevo registro en la tabla `usuarios`.  
- **Leer usuarios:** Muestra todos los registros existentes.  
- **Actualizar usuario:** Modifica los datos de un usuario por su `id`.  
- **Eliminar usuario:** Borra un usuario por su `id`.  

Ejemplo de clase `UsuarioCRUD` en Java:  
- `createUser(String nombre, String correo, int edad)`  
- `getAllUsers()`  
- `updateUser(int id, String nombre, String correo, int edad)`  
- `deleteUser(int id)`  

Ejemplo de clase `Main.java` para menú interactivo (consola):  

- Muestra en consola un menú con opciones:  
  1. Crear usuario  
  2. Leer usuarios  
  3. Actualizar usuario  
  4. Eliminar usuario  
- Según la opción, llama a los métodos de `UsuarioCRUD`.  
- Permite ingresar datos desde teclado y ejecuta la operación correspondiente en PostgreSQL.  

## Pruebas
- **Node.js:** Usar Postman con rutas GET, POST, PUT y DELETE para obtener, crear, actualizar y eliminar usuarios.  
- **Java (consola):** Ejecutar `Main.java` en `main/java/app` y usar el menú interactivo.  
- **Java (interfaz gráfica):** Ejecutar `Main.java` en `main/java/visual` para interactuar mediante la GUI.  
- **Angular:** Interfaz que muestra usuarios y permite crear, actualizar y eliminar registros mediante formularios y botones.  

## Notas Adicionales
- No subir la carpeta `node_modules` al repositorio.  
- Se recomienda usar versiones recientes de Node.js, Java y PostgreSQL.  
- Se puede usar Docker para levantar PostgreSQL o todo el proyecto si se desea.  

## Autor
- Nombre: Camilo Andres Ortegon Ayala  
- Correo: andresayala1954@hotmail.com 
- GitHub: https://github.com/Olimac1954


