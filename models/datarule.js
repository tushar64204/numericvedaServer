const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const DataSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    WhatsAppNumber: { type: String, required: true },
    UserType: { type: String, required: true },
    Selectedday: { type: String, required: true },
});

DataSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d"
    });
    return token;
};

const Data = mongoose.model("Data", DataSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        WhatsAppNumber: Joi.string().required().label("WhatsApp Number"),
        UserType: Joi.string().required().label("Select User Type"),
        Selectedday: Joi.string().required().label("Selected Day"),
    });
    return schema.validate(data);
};

module.exports = { Data, validate };