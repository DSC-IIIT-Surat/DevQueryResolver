const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Article = require('../models/Article');


router.post(newarticle,[
    body('title', 'Enter a title').isLength({ min: 5 }),
    body('url','Article URL').isURL(),
    body('tag','Enter a tag').isArray()
],async(res, req)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        
        // Adding new article

        res.json({message: "Article Created !"});
        
    } catch (err) {
        
    }
})