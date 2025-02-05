require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require("mongoose");

var routes = require("routes");
const { strict, strictEqual } = require("assert");
mongoose.set("strictQuery", False)
const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: { origin: "*" },
});

mongoose.connect("mongodb://localhost:27017/mongoose", {usenewUrlParser: true, useunifiedtopology: true},
  function checkdb(error)
  {
    if(error) {console.log ("error connected to database");}
    else {
    console.log("Connected to MongoDB");}
  }
);
app.use(cors());
app.use(express.json());
connectDB();
//Définition des routes API
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

//Gestion des connexions WebSocket
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));