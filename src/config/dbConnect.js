import mongoose from "mongoose";
// Conectando com o ATLAS:
mongoose.connect ("mongodb+srv://alura:123@alura.vrzkgex.mongodb.net/alura-node"); 

// Para exportar e fazer uma conexão: 
let db = mongoose.connection;

export default db; 