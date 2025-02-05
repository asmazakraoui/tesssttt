const mongoose = require("mongoose"); //Importe le module Mongoose, qui permet d'interagir avec une base de données MongoDB.
const MessageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Message", MessageSchema);
