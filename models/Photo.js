import mongoose from "mongoose";

const { Schema } = mongoose;

const photoSchema = new Schema(
  {
    image: String,
    title: String,
    likes: [String], // Especifica que likes é um array de strings (ou ajuste conforme necessário)
    comments: [String], // Especifica que comments é um array de strings (ou ajuste conforme necessário)
    userId: mongoose.ObjectId,
    userName: String,
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo; // Exporta o modelo
