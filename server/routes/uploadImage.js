const router = require('express').Router();
const Item = require('../models/Item');
const storage = require('../utils/multer');
const multer = require('multer');

const path = require('path');

const uploader = multer({ storage });

router.post('/upload', uploader.single('file'), async(req, res) => {
    
    const { file, body } = req;
    
    if (file && body) {
        const name = file.path;
        const newItem = new Item({
            author: body.author,
            title: body.title,
            description: body.description,
            price: body.price,
            medium: body.medium,
            image: name
        });
        await newItem.save();
        res.json({
            newItem: newItem
        });
    }
});


router.get('/download', async(req, res) => {
    const items = await Item.find();
    res.json(items);
});

module.exports = router;