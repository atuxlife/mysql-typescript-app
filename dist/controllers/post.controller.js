"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getPost = exports.createPost = exports.getPosts = void 0;
const database_1 = require("../database"); // Importa la conexión de la base de datos
// Lista todos los posts por GET. Responde con una promesa.
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query('SELECT * FROM posts;');
        return res.json(posts[0]);
    });
}
exports.getPosts = getPosts;
;
// Crear un post por el método POST. Responde con un JSON.
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body; // Recibe el JSON desde el body de la petición
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO posts SET ?', [newPost]);
        return res.json({
            message: 'Post creado correctamente'
        });
    });
}
exports.createPost = createPost;
;
// Listar los datos de un post recibiendo por GET un parámetro. Responde con una promesa.
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield (0, database_1.connect)();
        const post = yield conn.query('SELECT * FROM posts WHERE id = ? LIMIT 1;', [id]);
        return res.json(post[0]);
    });
}
exports.getPost = getPost;
// Recibe por DELETE el parámetro del ID del post que va a borrar. Responde con un JSON.
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM posts WHERE id = ? LIMIT 1;', [id]);
        return res.json({
            message: 'Post borrado correctamente'
        });
    });
}
exports.deletePost = deletePost;
// Método que viene de une petición PUT, recibe el ID del post a editar y en el cuerpo de la petición recibe el JSON
// de los datos que va a modificar.
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const updatePost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE posts SET ? WHERE id = ? LIMIT 1;', [updatePost, id]);
        return res.json({
            message: 'Post actualizado correctamente'
        });
    });
}
exports.updatePost = updatePost;
