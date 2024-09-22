import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv'; // Importar dotenv
import router from './Routes/Router.js';
dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

const port = process.env.PORT || 5000; // Usa 5000 se process.env.PORT não estiver definido

const app = express();
//routes

app.use(router)
// Configurar JSON e resposta de dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Adicionei cors aqui, caso necessário

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
