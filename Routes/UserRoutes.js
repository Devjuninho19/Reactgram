import express from "express";

const router = express.Router();

// Controller
import { register } from "../controllers/UserController.js"; // Use a sintaxe de importação ES6
//Middlewares
import validate from "../middlewares/handleValidation.js";
// Routes
router.post("/register",validate, register);

export default router; // Use export default em vez de module.exports
