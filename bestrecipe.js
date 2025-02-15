let recipe ={
    recipeTitle:"Ratatouille",
    servings:[2,2,3,1,2,1,10],
    ingredients:["Eggplant", "Zucchini ", "tomatoes","Carrot","Garlic", "onion" , "Olive oil"],
    directions: ["Firstly make sauce " , "secondly cut all vagetables", "after all put vagetables and sauce into dish and cook" ," If you follow this recipe, your ratatouille should come out beautifully!"]
}
console.log(recipe.recipeTitle,recipe.servings,recipe.directions )

for (let i =0; i<recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}
