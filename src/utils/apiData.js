export const fetchMeals = async (id) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(ENDPOINT);
  const json = await response.json();

  return json.meals;
};

export const fetchDrinks = async (id) => {
  const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(ENDPOINT);
  const json = await response.json();

  return json.drinks;
};

export const fetchRecipesData = async (type) => {
  const options = {
    meals: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  };

  const response = await fetch(options[type]);
  const data = await response.json();
  return data;
};

export const fetchRandomRecipe = async (type) => {
  const options = {
    meals: 'https://www.themealdb.com/api/json/v1/1/random.php',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  };
  const response = await fetch(options[type]);
  const data = await response.json();
  return data[type];
};
// para tela de busca do Header
export const getFoodByIngredient = async (ingredient) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.meals;
};

export const getFoodByName = async (name) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.meals;
};

export const getFoodByLetter = async (firstLetter) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.meals;
};

export const getDrinkByIngredient = async (ingredient) => {
  try {
    const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    return null;
  }
};

export const getDrinkByName = async (name) => {
  const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.drinks;
};

export const getDrinkByLetter = async (firstLetter) => {
  const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.drinks;
};

export const getAllIngredients = async (type) => {
  const options = {
    meals: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
  };

  const response = await fetch(options[type]);
  const data = await response.json();
  return data;
};

export const getFoodsCategory = async () => {
  const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.meals;
};

export const getDrinksCategory = async () => {
  const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.drinks;
};

// lista de todas as nacionalidades
export const getFoodsNationalityList = async () => {
  const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.meals;
};
// p/ filtrar por nacionalidade
export const getFoodsByNationality = async (nationality) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.meals;
};

export const getFoodsByCategoryName = async (categoryName) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.meals;
};

export const getDrinksByCategoryName = async (categoryName) => {
  const ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data.drinks;
};
