const express = require('express');
const dmarcRouter = express.Router();
const dmarcService = require('../services/dmarc.service')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage });

dmarcRouter.post(
    '/analyse',
    upload.single('file'),
    (req, res) => {
        dmarcService.analyseReport(req.file);
        res.sendStatus(200);
    }
)

module.exports = dmarcRouter;