const express = require("express");
const router = express.Router();
const data = require("../data.js");

router.get("/upload", async (req, res) => {
    let temp = req.query.temp;
    console.log(temp);
    res.send("ok");
});



router.post("/upload_data", async (req, res) => {
    try {
        body = req.body; // Automatically parsed by bodyParser

        // Request validation
        if (body.timestamp === undefined) {
            res.status(400).json({
                success: false,
                message: "Invalid request: No 'timestamp' key",
            });
            return;
        }

        data.insert(body);

        res.json({
            success: false,
            message: "Not yet implemented",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

module.exports = router;
