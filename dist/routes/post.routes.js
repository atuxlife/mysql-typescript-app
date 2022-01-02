"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Importa todos los controladores que se usarán para cada endpoint
const post_controller_1 = require("../controllers/post.controller");
// Rutas raíz para listar los posts y crear uno
router.route('/')
    .get(post_controller_1.getPosts)
    .post(post_controller_1.createPost);
// Rutas que reciben el parámetro en la url del ID para poder hacer la operación indicada
router.route('/:postId')
    .get(post_controller_1.getPost) // Elige un sólo post
    .delete(post_controller_1.deletePost) // Bprra un sólo post
    .put(post_controller_1.updatePost); // Actualiza un post
exports.default = router; // Exporta el router
