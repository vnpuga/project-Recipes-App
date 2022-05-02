import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Recomendations = () => {
  const { selectedRecipe, meals, drinks } = useContext(AppContext);

  const sixthRecipe = 6;
  const firstSixRecipes = selectedRecipe.type === 'foods'
    ? drinks.slice(0, sixthRecipe)
    : meals.slice(0, sixthRecipe);

  return (
    <div className="recomendations-container">
      {
        firstSixRecipes.map((recipe, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recomendation-card` }
            className="recomendations-card"
          >
            <p
              data-testid={ `${index}-recomendation-title` }
            >
              {selectedRecipe.type === 'foods' ? recipe.strDrink : recipe.strMeal}

            </p>
            <img
              width="300px"
              src={ selectedRecipe.type === 'foods'
                ? recipe.strDrinkThumb : recipe.strMealThumb }
              alt=""
            />
          </div>))
      }
    </div>
  );
};

export default Recomendations;
