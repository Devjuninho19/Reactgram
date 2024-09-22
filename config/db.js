import mongoose from 'mongoose';

const dbUser = process.env.DB_USER; // Coloque seu usuário aqui
const dbPassword = process.env.DB_PASS; // Coloque sua senha aqui

const conn = async () => {
    if (!dbUser || !dbPassword) {
        console.error("Usuário ou senha não definidos nas variáveis de ambiente.");
        return;
    }

    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.lcwqc.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Conectou com o banco!");
        return dbConn;
    } catch (error) {
        console.error("Erro ao conectar:", error.message); // Exibe apenas a mensagem de erro
    }
};

// Exemplo de chamada da função (adapte conforme sua estrutura de aplicação)
conn();

export default conn; // Exporta a função para ser usada em outros arquivos
