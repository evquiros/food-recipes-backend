const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    preparationTime: {
        total:String,
        prep: String,
        cook: String
    },
    ingredients: [String],
    instructions: [String],
    nutrition: {
        calories: String,
        carbs: String,
        protein: String,
        fat: String
    }
})

recipeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe