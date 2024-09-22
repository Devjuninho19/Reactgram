import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/Router.js';
import { fileURLToPath } from 'url'; // Importar para usar com import.meta.url
import { dirname } from 'path'; // Importar dirname

dotenv.config(); // Carregar variáveis de ambiente do arquivo .env

const port = process.env.PORT || 5000; // Usa 5000 se process.env.PORT não estiver definido

const app = express();

// Calcule __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuração das rotas
app.use(router);

// Diretório de uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuração do banco de dados
import('./config/db.js'); // Importação dinâmica para a configuração do DB

// Configurar JSON e resposta de dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Adicionei cors aqui, caso necessário

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
