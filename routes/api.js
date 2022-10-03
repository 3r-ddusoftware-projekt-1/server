const express = require("express");
const router = express.Router();
const data = require("./data.js");

router.post("/upload_data", async (req, res) => {
    try {
        body = req.body; // Automatically parsed by bodyParser


        // Request validation
        if (body.timestamp === undefined) {
            res.status(400).json({success: false});
            return;
        }

        res.json(
            {
                success: false,
                timestamp: body.timestamp,
            }
        );
    } catch (error) {
        res.status(500).json({
            success: false
        });
    }
});

module.exports = router;
