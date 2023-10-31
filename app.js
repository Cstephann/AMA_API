const express = require('express');
const app = express();
const recipes = require('./recipes.json')
const port = process.env.PORT || 3000;

app.use(express.json()); // Pour traiter les données au format JSON

// Définissez vos routes ici...
app.get('/api/recipes', (req,res) => {    
                                          res.status(200).json(recipes)})
app.post('/api/recipes', (req,res) => {   recipes.push(req.body)
                                          res.status(200).json(recipes)})
app.get('/api/recipes/:id', (req, res) => {
                                            const recipeId = parseInt(req.params.id)
                                            const recipe = recipes.find(recipe => recipe.id === recipeId)    
                                            res.status(200).json(recipe)
                                          });
app.put('/api/recipes/:id', (req, res) => {
                                            const recipeId = parseInt(req.params.id);
                                            let recipe = recipes.find(recipe => recipe.id === recipeId)
                                            recipe.name =req.body.name,    recipe.description =req.body.description,    recipe.ingredients =req.body.ingredients,    recipe.instructions =req.body.instructions,    recipe.createdAt = req.body.createdAt,    recipe.udatedAt= req.body.updatedAt,    res.status(200).json(recipe)
                                          });
app.delete('/api/recipes/:id', (req, res) => {
                                            const recipeId = parseInt(req.params.id);
                                            let recipe = recipes.find(recipe => recipe.id === recipeId)    
                                            recipes.splice(recipes.indexOf(recipe),1)    
                                            res.status(200).json(recipes)
                                          });
                                          

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});