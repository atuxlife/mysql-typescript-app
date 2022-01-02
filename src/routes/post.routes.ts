import { Router } from "express";
const router = Router();

// Importa todos los controladores que se usarán para cada endpoint
import { getPosts, createPost, getPost, deletePost, updatePost } from '../controllers/post.controller';

// Rutas raíz para listar los posts y crear uno
router.route('/')
    .get(getPosts)
    .post(createPost);

// Rutas que reciben el parámetro en la url del ID para poder hacer la operación indicada
router.route('/:postId')
    .get(getPost) // Elige un sólo post
    .delete(deletePost) // Bprra un sólo post
    .put(updatePost); // Actualiza un post

export default router; // Exporta el router