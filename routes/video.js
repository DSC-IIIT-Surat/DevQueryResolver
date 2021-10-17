const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Video = require('../models/video');

router.post('/newvideo', [
    body('title', 'Enter a title').isLength({ min: 5 }),
    body('url','Article URL').isURL(),
    body('tag','Enter a tag').isArray(),
    body('description','Enter a description').isDefault()
], (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        
        // Adding new video

    } catch (err) {
        
    }
});