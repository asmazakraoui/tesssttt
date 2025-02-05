const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);// Connecte l’application à la base de données MongoDB.
    //Récupère l’URL de connexion depuis un fichier .env.
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
module.exports = connectDB;
