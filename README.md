# Recipe API Documentation

## Overview

This API allows you to retrieve and search for recipes from a predefined dataset. It provides endpoints to get a random recipe, all recipes, a specific recipe by index, and recipes containing a specific ingredient.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A JSON file (`recipes.json`) containing recipe data located in the `data` directory.

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the necessary dependencies by running:

   ```bash
   npm install express
   ```

### Running the API

Start the server by running the main application file (e.g., `app.js`):

```bash
node app.js
```

## API Endpoints

### Base URL

```
http://localhost:3000
```

### Endpoints

#### 1. Test Route

- **URL**: `/`
- **Method**: `GET`
- **Description**: Returns a simple JSON message to confirm the API is working.

**Response**:

```json
{
  "message": "👋🌎🌍🌏"
}
```

#### 2. Get a Random Recipe

- **URL**: `/recipe`
- **Method**: `GET`
- **Description**: Returns a random recipe from the dataset.

**Response**:

```json
{
  "Name": "Christmas pie",
  "url": "https://www.bbcgoodfood.com/recipes/2793/christmas-pie",
  "Description": "Combine a few key Christmas flavours here to make a pie that both children and adults will adore",
  "Author": "Mary Cadogan",
  "Ingredients": [
    "2 tbsp olive oil",
    "knob butter",
    "1 onion, finely chopped",
    "500g sausagemeat or skinned sausages",
    "grated zest of 1 lemon",
    "100g fresh white breadcrumbs",
    "85g ready-to-eat dried apricots, chopped",
    "50g chestnut, canned or vacuum-packed, chopped",
    "2 tsp chopped fresh or 1tsp dried thyme",
    "100g cranberries, fresh or frozen",
    "500g boneless, skinless chicken breasts",
    "500g pack ready-made shortcrust pastry",
    "beaten egg, to glaze"
  ]
}
```

#### 3. Get All Recipes

- **URL**: `/recipe/all`
- **Method**: `GET`
- **Description**: Returns all recipes from the dataset.

**Response**:

```json
[
  {
    "Name": "Christmas pie",
    "url": "https://www.bbcgoodfood.com/recipes/2793/christmas-pie",
    "Description": "Combine a few key Christmas flavours here to make a pie that both children and adults will adore",
    "Author": "Mary Cadogan",
    "Ingredients": [
      "2 tbsp olive oil",
      "knob butter",
      "1 onion, finely chopped",
      "500g sausagemeat or skinned sausages",
      "grated zest of 1 lemon",
      "100g fresh white breadcrumbs",
      "85g ready-to-eat dried apricots, chopped",
      "50g chestnut, canned or vacuum-packed, chopped",
      "2 tsp chopped fresh or 1tsp dried thyme",
      "100g cranberries, fresh or frozen",
      "500g boneless, skinless chicken breasts",
      "500g pack ready-made shortcrust pastry",
      "beaten egg, to glaze"
    ]
  },
  ...
]
```

#### 4. Get a Specific Recipe by Index

- **URL**: `/:num`
- **Method**: `GET`
- **Description**: Returns a specific recipe based on the provided index.

**Request Parameters**:

- `num`: Index of the recipe in the dataset (0-based).

**Response**:

```json
{
  "Name": "Christmas pie",
  "url": "https://www.bbcgoodfood.com/recipes/2793/christmas-pie",
  "Description": "Combine a few key Christmas flavours here to make a pie that both children and adults will adore",
  "Author": "Mary Cadogan",
  "Ingredients": [
    "2 tbsp olive oil",
    "knob butter",
    "1 onion, finely chopped",
    "500g sausagemeat or skinned sausages",
    "grated zest of 1 lemon",
    "100g fresh white breadcrumbs",
    "85g ready-to-eat dried apricots, chopped",
    "50g chestnut, canned or vacuum-packed, chopped",
    "2 tsp chopped fresh or 1tsp dried thyme",
    "100g cranberries, fresh or frozen",
    "500g boneless, skinless chicken breasts",
    "500g pack ready-made shortcrust pastry",
    "beaten egg, to glaze"
  ]
}
```

#### 5. Get Recipes Containing a Specific Ingredient

- **URL**: `/recipe/contains/:findFood`
- **Method**: `GET`
- **Description**: Returns recipes that contain the specified ingredient.

**Request Parameters**:

- `findFood`: Ingredient to search for in the recipes.

**Response**:

```json
[
  {
    "Name": "Christmas pie",
    "url": "https://www.bbcgoodfood.com/recipes/2793/christmas-pie",
    "Description": "Combine a few key Christmas flavours here to make a pie that both children and adults will adore",
    "Author": "Mary Cadogan",
    "Ingredients": [
      "2 tbsp olive oil",
      "knob butter",
      "1 onion, finely chopped",
      "500g sausagemeat or skinned sausages",
      "grated zest of 1 lemon",
      "100g fresh white breadcrumbs",
      "85g ready-to-eat dried apricots, chopped",
      "50g chestnut, canned or vacuum-packed, chopped",
      "2 tsp chopped fresh or 1tsp dried thyme",
      "100g cranberries, fresh or frozen",
      "500g boneless, skinless chicken breasts",
      "500g pack ready-made shortcrust pastry",
      "beaten egg, to glaze"
    ]
  }
]
```

If the `findFood` parameter is not provided, the response will be:

```json
{
  "Error": "INVALID REQUEST"
}
```

