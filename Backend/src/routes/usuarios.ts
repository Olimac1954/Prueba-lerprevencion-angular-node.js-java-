import { Router } from "express";
import { deleteUsusario, getUser, getUsers, postUsuario, updateUsuario } from "../controllers/usuarios.js";

const router = Router();
//RUTAS PARA USUARIOS
router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUsusario);
router.post('/', postUsuario);
router.put('/:id', updateUsuario);
export default router;