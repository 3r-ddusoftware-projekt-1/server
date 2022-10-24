const express = require("express");
const router = express.Router();
const data = require("./data.js");

router.post("/upload_data", async (req, res) => {
    try {
        body = req.body; // Automatically parsed by bodyParser


        // Request validation
        if (body.datapoints === undefined) {
            res.status(400).json({success: false, message: "Invalid request: No 'datapoints' key"});
            return;
        }

        res.json(
            {
                success: false,
                message: "Not yet implemented",
            }
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

module.exports = router;
