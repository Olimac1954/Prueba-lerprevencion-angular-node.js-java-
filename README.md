# Prueba Técnica - Desarrollador Full Stack

## 🌟 Descripción del Proyecto

Este proyecto consiste en un microservicio en **Node.js** con **Express** que se conecta a **PostgreSQL** y expone datos para ser consumidos por un frontend en **Angular**.
También incluye un **CRUD en Java** para gestionar usuarios desde consola o interfaz gráfica.

**Objetivo:** Crear, leer, actualizar y eliminar registros de usuarios desde Node.js, Angular y Java.

---

## 🛠 Tecnologías Utilizadas

* **Backend (Node.js):** Node.js, Express, pg, TypeScript, dotenv, cors, Sequelize, nodemon
* **Base de datos:** PostgreSQL
* **Frontend (Angular):** Angular, Bootstrap o Angular Material
* **Backend Java:** Java 17+, JDBC
* **Herramientas:** Postman, Docker (opcional)

---

## 📂 Estructura de la Base de Datos

Tabla: `usuarios`

| Campo  | Tipo         | Descripción        |
| ------ | ------------ | ------------------ |
| id     | SERIAL       | Clave primaria     |
| nombre | VARCHAR(100) | Nombre del usuario |
| correo | VARCHAR(100) | Correo del usuario |
| edad   | INT          | Edad del usuario   |

**SQL para crear la tabla:**

```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  edad INT
);
```

---

## 🚀 Instalación y Ejecución
CLonar repositorio 
```bash
git clone https://github.com/Olimac1954/Prueba-lerprevencion-angular-node.js-java-.git
```
-cd Prueba lerprevencion Angular+nodejs
-cd backend o frontend
-npm install respectivamente

### 1️⃣ Backend Node.js
El backend esta construido de tal manera que los enpoints permitan hacer uso de 
GET,PUT,UPDATE y DELETE, mas adelante en este redme explico como se muestra en el front y como poder usarlo en el postman
todo el backend esta funcional y conectado a la base de datos

1. Entrar a la carpeta del backend:

```bash
cd backend
```

2. Instalar dependencias:

```bash
npm install
```

> Incluye nodemon, TypeScript, Express, dotenv, cors y Sequelize.

3. Configurar el puerto en `.env`:

```env
PORT=3000
```
4. configurar el acceso a la base de datos
   en el directorio
   **src/db/conection.ts en la constante sequelize**, se encontraran las credenciales para acceder a la base de datos

> Configuración de la base de datos en `src/db/connection.ts`.

5. Ejecutar servidor en modo desarrollo:

```bash
1-(mantener activo en una terminar para crear carpeta dist)

tsc --watch

2-(ejecutar en otra terminal)

nodemon dist/index.js .
```

La API estará disponible en: [http://localhost:3000/api/data](http://localhost:3000/api/usuarios)

---

### 2️⃣ Frontend Angular
El frontend esta totalmente construido , con un diseño amigable para el usuario, cuenta con una tabla en la cual muestra todos los usuarios
y cuenta con una columna la cual muestra sus botones de editar y eliminar , adicionalmente fuera de la tabla en la parte superior derecha 
cuenta con un boton para agregar un nuevo usuario
cada que se realiza una accion , este emitira un pequeño mensaje de informacion 
todo el Frontend esta funcional y conectado a los endpoints del backend

1. Entrar a la carpeta del frontend:

```bash
cd frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar Angular:

```bash
ng serve
```

La aplicación estará disponible en: [http://localhost:4200](http://localhost:4200)


---

### 3️⃣ Backend Java (CRUD)
Se realiza un CRUD en java,elaborando dos ejecutables, por consola y por interfaz,
Este CRUD esta totalmente conectado a la base de datos lo cual permite crear,editar,eliminar y actualizar datos 
en la base
El proyecto Java incluye **dos ejecutables**:

* Consola: `main/java/app`
* Interfaz gráfica: `main/java/visual`
**configurar base de datos**
se ingresa al directorio
```bash
cd main/java/database
```
en el archivo connection encontrara
ULR 
USER
PASWORD 
se editan para acceder a la base

#### Ejecución

1. Entrar a la carpeta correspondiente:

```bash
cd main/java/app  # Consola
cd main/java/visual  # Interfaz gráfica
```

#### Funcionalidades

* Crear usuario
* Leer usuarios
* Actualizar usuario
* Eliminar usuario

#### Métodos en `UsuarioCRUD.java`:

* `createUser(String nombre, String correo, int edad)`
* `getAllUsers()`
* `updateUser(int id, String nombre, String correo, int edad)`
* `deleteUser(int id)`

#### `Main.java` (Consola)

* Menú interactivo con opciones CRUD
* Entrada de datos desde teclado
* Operaciones sobre PostgreSQL

---

## 🧪 Pruebas

Para probar el backend de Node.js, se puede usar **Postman** para enviar peticiones HTTP a la API.

### 1️⃣ Preparar el entorno

1. Asegurarse de que el servidor Node.js esté corriendo:

```bash
cd backend
npx nodemon --watch .
```

2. La API estará disponible en:

```
http://localhost:3000/api/data
```

3. Abrir Postman y crear una nueva colección, por ejemplo: `Usuarios API`.

### 2️⃣ Endpoints disponibles

#### a) GET — Listar usuarios

* Método: **GET**
* URL: `http://localhost:3000/api/data`
* Presionar **Send**.
* Resultado esperado: un JSON con todos los usuarios, por ejemplo:

```json
[
  {
    "id": 1,
    "nombre": "Andres",
    "correo": "andres@example.com",
    "edad": 25
  }
]
```

#### b) POST — Crear usuario

* Método: **POST**
* URL: `http://localhost:3000/api/data`
* Body → raw → JSON:

```json
{
  "nombre": "Andres",
  "correo": "andres@example.com",
  "edad": 25
}
```

* Presionar **Send**.
* Resultado esperado: el usuario se crea y devuelve un JSON con su información.

#### c) PUT — Actualizar usuario

* Método: **PUT**
* URL: `http://localhost:3000/api/data/1` (reemplazar `1` por el `id` del usuario)
* Body → raw → JSON:

```json
{
  "nombre": "Andres Actualizado",
  "correo": "andres.actualizado@example.com",
  "edad": 26
}
```

* Presionar **Send**.
* Resultado esperado: confirmación de actualización del usuario.

#### d) DELETE — Eliminar usuario

* Método: **DELETE**
* URL: `http://localhost:3000/api/data/1` (reemplazar `1` por el `id` del usuario)
* Presionar **Send**.
* Resultado esperado: mensaje confirmando que el usuario fue eliminado.

---

## 👤 Autor

* **Nombre:** Camilo Andres Ortegon Ayala
* **Correo:** [andresayala1954@hotmail.com](mailto:andresayala1954@hotmail.com)
* **GitHub:** [https://github.com/Olimac1954](https://github.com/Olimac1954)
