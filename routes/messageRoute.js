const express = require("express");
const Message = require("../models/Message");
const authMiddleware = require("../middleware/authMiddleware");//Middleware qui protège la route

const router = express.Router();//permet de créer un groupe de routes.

router.get("/", authMiddleware, async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

module.exports = router;
