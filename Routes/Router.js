import express from 'express';
import userRoutes from './UserRoutes.js'; // Use a importação ES6 e adicione .js

const router = express.Router(); // Use Router() corretamente

// Usando as rotas de usuário
router.use("/api/users", userRoutes); // Use a sintaxe ES6 para importação

// Teste de rota
router.get("/", (req, res) => {
    res.send("API working");
});

export default router; // Exporta o router usando export default
