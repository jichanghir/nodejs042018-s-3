const express = require('express');
const router = express.Router();

const newsCtrl = require('./controllers/news');

router.get('/', (req, res) => {
    res.json({success: true});
});

router.get('/getNews', async (req, res) => {
    try {
        const result = await newsCtrl.getNews();
        res.json(result)
    }
    catch (err) {
        console.error("err", err);
        res.status(500).json({success: false, message: "Internal error"});
    }
});

router.post('/setNews', async (req, res) => {
    try {
        const result = await newsCtrl.setNews(req.body);
        res.json(result);
    }
    catch (err) {
        console.error("err", err);
        res.status(500).json({success: false, message: "Internal error"});
    }
});

router.post('/getNewsById', async (req, res) => {
    try {
        const result = await newsCtrl.getNewsById(req.body);
        res.json(result);
    }
    catch (err) {
        console.error("err", err);
        res.status(500).json({success: false, message: "Internal error"});
    }
});

module.exports = router;
