// Dependencies
const express = require("express");
// Creating my routes
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;