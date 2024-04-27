// models/message.js
const mongoose = require("mongoose");
const Joi = require("joi");

const messageSchema = new mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true }
});

const Message = mongoose.model("Message", messageSchema);

const validateMessage = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    message: Joi.string().required().label("Message")
  });
  return schema.validate(data);
};

module.exports = { Message, validateMessage };