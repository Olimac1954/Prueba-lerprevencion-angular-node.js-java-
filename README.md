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
-git clone https://github.com/Olimac1954/Prueba-lerprevencion-angular-node.js-java-.git
-cd Prueba lerprevencion Angular+nodejs
-cd backend o frontend
-npm install respectivamente

### 1️⃣ Backend Node.js

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

> Configuración de la base de datos en `src/db/connection.ts`.

4. Ejecutar servidor en modo desarrollo:
  1- 
    ```bash
    tsc --watch
    ```
  2- 
    ```bash
    nodemon dist/index.js .
    ```

La API estará disponible en: [http://localhost:3000/api/data](http://localhost:3000/api/usuarios)

---

### 2️⃣ Frontend Angular

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

El proyecto Java incluye **dos ejecutables**:

* Consola: `main/java/app`
* Interfaz gráfica: `main/java/visual`

#### Ejecución

1. Entrar a la carpeta correspondiente:

```bash
cd main/java/app  # Consola
cd main/java/visual  # Interfaz gráfica
```

2. Compilar:

```bash
javac -cp postgresql-<version>.jar:. *.java
```

3. Ejecutar:

```bash
java -cp postgresql-<version>.jar:. Main
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

* **Node.js:** Postman con rutas GET, POST, PUT y DELETE
* **Java (consola):** Ejecutar `Main.java` en `main/java/app`
* **Java (GUI):** Ejecutar `Main.java` en `main/java/visual`
* **Angular:** Interfaz con formularios y botones para CRUD

---

## 📝 Notas Adicionales necesarias para la realizacion de este proyecto

* No subir la carpeta `node_modules`
* Usar versiones recientes de Node.js, Java y PostgreSQL
* Docker opcional para levantar PostgreSQL o el proyecto completo

---

## 👤 Autor

* **Nombre:** Camilo Andres Ortegon Ayala
* **Correo:** [andresayala1954@hotmail.com](mailto:andresayala1954@hotmail.com)
* **GitHub:** [https://github.com/Olimac1954](https://github.com/Olimac1954)
