let allRecipes = [];

fetch("https://dummyjson.com/recipes")
  .then((res) => res.json())
  .then((data) => {
    allRecipes = data.recipes;
    displayRecipes(allRecipes);
    populateDropdown(allRecipes);
  });

function displayRecipes(recipes) {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";
  recipes.forEach((recipe) => {
    container.innerHTML += `
      <div style="border:1px solid #ccc; margin:10px; padding:10px;">
        <h3>${recipe.name}</h3>
        <img src="${recipe.image}" width="100">
        <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
      </div>
    `;
  });
}

function populateDropdown(recipes) {
  const dropdown = document.getElementById("recipeDropdown");
  recipes.forEach((recipe) => {
    const opt = document.createElement("option");
    opt.value = recipe.name;
    opt.textContent = recipe.name;
    dropdown.appendChild(opt);
  });
}

document.getElementById("searchBox").addEventListener("input", filterRecipes);
document
  .getElementById("difficultyFilter")
  .addEventListener("change", filterRecipes);
document
  .getElementById("recipeDropdown")
  .addEventListener("change", filterRecipes);

function filterRecipes() {
  const search = document.getElementById("searchBox").value.toLowerCase();
  const difficulty = document.getElementById("difficultyFilter").value;
  const recipeName = document.getElementById("recipesDropdown").value;

  const filtered = allRecipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(search);
    const matchesDifficulty = difficulty
      ? recipe.difficulty === difficulty
      : true;
    const matchesDropdown = recipeName ? recipe.name === recipeName : true;
    return matchesSearch && matchesDifficulty && matchesDropdown;
  });

  displayRecipes(filtered);
}
