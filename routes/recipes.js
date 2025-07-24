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

router.post('/', async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body)
        const savedRecipe = await newRecipe.save()
        res.status(201).json(savedRecipe)
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message })
        }
        res.status(500).json({ message: 'Server error' })
    }
})


module.exports = router