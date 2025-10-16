import type { Request, Response } from 'express';
import usuarios from '../models/usuarios.js'; // Importa el modelo de usuarios definido con Sequelize

// 🔹 Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
    // findAll() trae todos los registros de la tabla "usuarios"
    const listUsuarios = await usuarios.findAll();
    res.json(listUsuarios); // Se envía la lista de usuarios como respuesta JSON
}

// 🔹 Obtener un usuario por su ID
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params; // Se obtiene el ID de los parámetros de la URL
    const user = await usuarios.findByPk(id); // findByPk busca un registro por su clave primaria

    if (user) {
        res.json(user); // Si el usuario existe, se devuelve
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}` // Si no existe, se devuelve un error 404
        });
    }
}

// 🔹 Eliminar un usuario por su ID
export const deleteUsusario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await usuarios.findByPk(id); // Buscamos al usuario

    if (!user) {
        // Si no existe, respondemos con 404
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    } else {
        await user.destroy(); // Elimina el registro de la base de datos
        res.json({
            msg: 'El usuario fue eliminado con exito!' // Confirmación de eliminación
        });
    }
}

// 🔹 Crear un nuevo usuario
export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req; // Obtenemos los datos enviados en el cuerpo de la petición

    try {
        await usuarios.create(body); // Crea un nuevo registro en la tabla "usuarios"

        res.json({
            msg: `El usuario fue agregado con exito!` // Confirmación de creación
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte` // Manejo de errores
        });
    }
}

// 🔹 Actualizar un usuario por su ID
export const updateUsuario = async (req: Request, res: Response) => {
    const { body } = req; // Datos a actualizar
    const { id } = req.params; // ID del usuario a actualizar

    try {
        const user = await usuarios.findByPk(id); // Buscar el usuario por su ID

        if (user) {
            await user.update(body); // Actualizar los datos del usuario
            res.json({
                msg: 'El usuario fue actualizado con exito' // Confirmación de actualización
            });
        } else {
            res.status(404).json({
                msg: `No existe un usuario con el id ${id}` // Si no existe, respondemos con error 404
            });
        }

    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte` // Manejo de errores
        });
    }
}
