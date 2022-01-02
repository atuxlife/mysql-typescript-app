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
// Importando configuración del servidor, rutas y conexiones
const app_1 = require("./app");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new app_1.App(); // El puerto es 5000 se puede cambiar en el .env
        yield app.listen();
    });
}
// Lanzando el servidor en el puerto asignado
main();
