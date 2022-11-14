const express = require("express");
const router = express.Router();
const data = require("../data.js");

// DEFINITION TO GET DATA
router.get("/get", async (req, res) => {
    data.get_all().then((results) => res.send(results));
});

// Kan give værdier ved hjælp af url
router.get("/upload", async (req, res) => {
    let time = req.query.time;
    let alt = req.query.alt;
    let temp = req.query.temp;
    let press = req.query.press;
    console.log(temp);
    data.insert({
        timestamp: time,
        altitude: alt,
        temperature: temp,
        pressure: press,
    });
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
