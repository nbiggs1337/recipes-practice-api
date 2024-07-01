const express = require("express");
const routes = express.Router();
const data = require("../data/recipes.json")
console.log(data[0])
// init test route
routes.get('/', (req, res) => {
    res.json({
      message: '👋🌎🌍🌏',
    });
  });

  routes.get('/recipe', (req, res) => {
    //get random index
    let rand = Math.floor(Math.random() *  data.length) + 1
    res.json(data[rand]);
  });

  routes.get('/recipes/all', (req, res) => {
    //get random inde
    res.json(data);
  });

  routes.get('/:num', (req, res) => {
    res.json(data[req.params.num]);
  });


routes.get('/recipe/contains/:findFood', (req, res) => {
    if ( req.params.findFood) {
        let find = req.params.findFood;
        res.json( data.filter(recipe => 
            recipe.Ingredients.some(ingr => 
                ingr.toLowerCase().includes(find.toLowerCase()))) )

    } else {
        res.json({Error: `INVALID REQUEST`});
    }
  });



  module.exports = routes