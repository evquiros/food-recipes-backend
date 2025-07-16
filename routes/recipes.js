const express = require('express')
const Recipe = require('../models/Recipe')
const router = express.Router()

router.get('/', async ( req, res ) => {
    const getAllRecipes = await Recipe.find()
    res.json(getAllRecipes)
})

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
        if(recipe) {
            res.status(200).json(recipe)
        } else {
            res.status(400).end()
        }
    } catch(error) {
        console.error(error)
    }
})

module.exports = router