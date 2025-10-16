import express from 'express'; 
import cors from 'cors';

import type { Request, Response } from 'express'; 
import routeUsuario from '../routes/usuarios.js'; // Importa las rutas de usuarios
import db from '../db/connection.js'; // Importa la conexión a la base de datos

class Server {
    private app: express.Application; // Instancia principal de Express
    private port: string; // Puerto en el que corre el servidor

    constructor() {
        this.app = express(); // Inicializa Express
        this.port = process.env.PORT || '3001'; // Puerto por defecto o desde variables de entorno
        this.listen(); // Inicia el servidor
        this.middleware(); // Configura middlewares
        this.routes(); // Configura rutas
        this.dbConnection(); // Conecta a la base de datos
    }

    // 🔹 Método para iniciar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        });
    }

    // 🔹 Método para configurar las rutas
    routes() {
        // Ruta raíz de prueba
        this.app.get('/', (req: Request, res: Response) => {
            res.json({ msg: 'api trabajando' }); // Respuesta simple para confirmar que la API funciona
        });

        // Rutas de usuarios (CRUD)
        this.app.use('/api/usuarios', routeUsuario);
    }

    // 🔹 Método para configurar middlewares
    middleware() {
        this.app.use(express.json()); // Permite recibir JSON en el body de las peticiones
        this.app.use(cors()); // Habilita CORS para permitir peticiones desde otros dominios
    }

    // 🔹 Método para conectar la base de datos
    async dbConnection() {
        try {
            await db.authenticate(); // Verifica la conexión con la base de datos
            console.log('Base de datos online');
        } catch (error) {
            console.log(error); // Muestra errores si la conexión falla
        }
    }
}

// Exporta la clase para crear el servidor en otro archivo
export default Server;
