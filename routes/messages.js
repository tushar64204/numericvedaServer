// routes/messages.js
const express = require("express");
const { Message, validateMessage } = require("../models/message");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { error } = validateMessage(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const { email, message } = req.body;
    const newMessage = new Message({ email, message });
    await newMessage.save();

    res.status(201).send({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;