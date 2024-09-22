import User from "../models/User.js"; // Adicione .js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// Register User and sign in
export const register = async (req, res) => {
  // Lógica para registro do usuário (exemplo)
  res.send("registro"); // Corrigi para usar res.send()
};

// Exporta o token gerado, se necessário
export { generateToken };
