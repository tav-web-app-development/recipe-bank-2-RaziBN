import { useState } from "react";

/* eslint-disable react/prop-types */
function RecipeContainer({ recipe, deleteFromArray }) {
  const [editButton, setEditButton] = useState(true);
  const [recipeTemp, setRecipeTemp] = useState(recipe);

  const editText = editButton ? "Edit" : "Save";

  function handleChange(e, key) {
    setRecipeTemp({
      ...recipeTemp,
      [key]: e.target.value,
    });
  }
  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = recipe.title;
        }}
        id={recipe.id}
      >
        <div>
          <button onClick={() => setEditButton(!editButton)}>{editText}</button>
          <button
            onClick={(e) => {
              deleteFromArray(recipeTemp.id);
            }}
          >
            Delete
          </button>
        </div>

        <div className="recipe">
          <h2>{recipe.title}</h2>

          {editButton ? (
            <p>
              <strong>Description</strong>
              <br />
              {recipeTemp.description}
            </p>
          ) : (
            <>
              Description:
              <textarea
                type="text"
                defaultValue={recipeTemp.description}
                onChange={(e) => handleChange(e, "description")}
                rows={5}
                cols={75}
              />
            </>
          )}
          <br />
          {editButton ? (
            <p>
              <strong>Ingredients:</strong>
              <br />
              {recipeTemp.ingredients}
            </p>
          ) : (
            <>
              Ingrediants:
              <textarea
                type="text"
                defaultValue={recipeTemp.ingredients}
                onChange={(e) => handleChange(e, "ingredients")}
                rows={5}
                cols={75}
              />
            </>
          )}
          <br />
          {editButton ? (
            <p>
              <strong>Directions:</strong>
              <br />
              {recipeTemp.directions}
            </p>
          ) : (
            <>
              Directions:
              <textarea
                type="text"
                defaultValue={recipeTemp.directions}
                onChange={(e) => handleChange(e, "directions")}
                rows={5}
                cols={75}
              />
            </>
          )}
          <br />
          <img
            src={recipe.photoUrl}
            alt={recipe.title}
            width={300}
            height={300}
          />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
