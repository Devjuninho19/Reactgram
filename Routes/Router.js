import express from 'express';

const router = express.Router(); // Use Router() em vez de express()

// teste de rota
router.get("/", (req, res) => {
    res.send("API working");
});

export default router; // Exporta o router usando export default
