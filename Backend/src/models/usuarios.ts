import { DataTypes } from 'sequelize';
import db from '../db/connection.js';

const usuarios = db.define('usuarios',{//definimos los campos de la tabla
    nombre:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    edad:{
        type: DataTypes.INTEGER
    }  
}, {
    timestamps: false,
    createdAt: false,
})
export default usuarios;