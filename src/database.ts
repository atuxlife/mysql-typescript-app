// Configuración de la conexión de la base de datos
import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export async function connect(){
    // Creando conexión de la base de datos. Esta configuración se guarda en el archivo .env
    const connection = await createPool({
        host: process.env.HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
        connectionLimit: 10,
        multipleStatements: true
    });
    return connection; // Retornamos la conexión
};