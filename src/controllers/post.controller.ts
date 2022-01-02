import { Request, Response } from 'express'; // Importa Express
import { connect } from '../database'; // Importa la conexión de la base de datos
import { Post } from '../interface/Post'; // Importa la interfaz con la estructura del post

// Lista todos los posts por GET. Responde con una promesa.
export async function getPosts(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts;');
    return res.json(posts[0]);
};

// Crear un post por el método POST. Responde con un JSON.
export async function createPost(req: Request, res: Response) {
    const newPost: Post = req.body; // Recibe el JSON desde el body de la petición
    const conn = await connect();
    await conn.query('INSERT INTO posts SET ?', [newPost]);
    return res.json({
        message: 'Post creado correctamente'
    });
};

// Listar los datos de un post recibiendo por GET un parámetro. Responde con una promesa.
export async function getPost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM posts WHERE id = ? LIMIT 1;', [id]);
    return res.json(post[0]);
}

// Recibe por DELETE el parámetro del ID del post que va a borrar. Responde con un JSON.
export async function deletePost(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('DELETE FROM posts WHERE id = ? LIMIT 1;', [id]);
    return res.json({
        message: 'Post borrado correctamente'
    });
}

// Método que viene de une petición PUT, recibe el ID del post a editar y en el cuerpo de la petición recibe el JSON
// de los datos que va a modificar.
export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE posts SET ? WHERE id = ? LIMIT 1;', [updatePost, id]);
    return res.json({
        message: 'Post actualizado correctamente'
    });
}