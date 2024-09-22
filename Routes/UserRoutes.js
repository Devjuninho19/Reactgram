import express from "express";

const router = express.Router();

// Controller
import { register } from "../controllers/UserController.js"; // Use a sintaxe de importação ES6

// Routes
router.post("/register", register);

export default router; // Use export default em vez de module.exports
