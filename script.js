document.addEventListener("DOMContentLoaded", function () {
    const ingredientInput = document.getElementById("ingredientInput");
    const searchButton = document.getElementById("searchButton");
    const recipeList = document.getElementById("recipeList");

    searchButton.addEventListener("click", function () {
        const searchQuery = ingredientInput.value.toLowerCase();
        recipeList.innerHTML = ""; 
        const recipes = [
            { name: "Pasta con Salsa de Tomate", ingredients: ["pasta", "tomate", "aceite"] },
            { name: "Ensalada César", ingredients: ["lechuga", "pollo", "crutones"] },
            { name: "Tacos de Pollo", ingredients: ["pollo", "tortillas", "salsa"] },
            { name: "Pizza Margarita", ingredients: ["masa de pizza", "tomate", "queso"] },
            { name: "Sopa Paraguaya", ingredients: ["harina de maíz", "cebolla", "queso"] },
            { name: "Chipa", ingredients: ["almidón de mandioca", "queso", "leche"] },
            
        ];
        recipes.push(
            { name: "Asado Paraguayo", ingredients: ["carne de res", "chorizo", "yuca"] },
            { name: "Milanesa a la Napolitana", ingredients: ["filete de carne", "pan rallado", "tomate", "jamón"] },
            { name: "Risotto de Champiñones", ingredients: ["arroz", "champiñones", "caldo de verduras"] }
        );

        const matchingRecipes = recipes.filter((recipe) =>
            recipe.ingredients.some((ingredient) => ingredient.includes(searchQuery))
        );

        if (matchingRecipes.length > 0) {
            matchingRecipes.forEach((recipe) => {
                const listItem = document.createElement("li");
                listItem.textContent = recipe.name;
                recipeList.appendChild(listItem);
            });
        } else {
            const noResultsItem = document.createElement("li");
            noResultsItem.textContent = "No se encontraron recetas con esos ingredientes.";
            recipeList.appendChild(noResultsItem);
        }
    });
});