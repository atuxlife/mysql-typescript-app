import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

// Routes
import IndexRoutes from './routes/index.routes'; // Rutas principales
import PostRoutes from './routes/post.routes'; // Rutas con los endpoints CRUD

export class App {

    private app: Application;
    
    // Constructor
    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000); // Configuración del puerto de conexión a la aplicación
    }

    middlewares(){
        this.app.use(morgan('dev')); // Muestra logs de conexión
        this.app.use(express.json()); // Ayuda en la captura de datos por POST y PUT que vienen en formato JSON
    }

    routes(){
        this.app.use(IndexRoutes); // Ruta principal
        this.app.use('/posts', PostRoutes); // Ruta de la que se desprenden los endpoints del CRUD
    }

    // Lanzamiento del servidor usando el puerto configurado
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port ',this.app.get('port'));
    }
    
}