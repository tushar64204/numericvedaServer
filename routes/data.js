const router = require("express").Router();
const { Data, validate } = require("../models/datarule");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        
        await new Data({ ...req.body }).save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;