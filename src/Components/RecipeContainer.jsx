/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/prop-types */
function RecipeContainer({ recipe, deleteFromArray, updateArray }) {
  const [editButton, setEditButton] = useState(true);
  const [recipeTemp, setRecipeTemp] = useState(recipe);

  function handleChange(e, key) {
    setRecipeTemp({ ...recipeTemp, [key]: e.target.value });
  }

  const handleButtonClick = () => {
    setEditButton(!editButton);
    if (!editButton) {
      updateArray(recipeTemp);
    }
  };

  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = recipeTemp.title;
        }}
      >
        <div className="recipe">
          <h2>{recipeTemp.title}</h2>
          <div>
            <button onClick={() => handleButtonClick()}>
              {editButton ? "Edit" : "Save"}
            </button>
            <button
              onClick={(e) => {
                deleteFromArray(recipeTemp.id);
              }}
            >
              Delete
            </button>
          </div>
          <p>
            {editButton ? (
              <>
                <strong>Description:{recipeTemp.description}</strong>
              </>
            ) : (
              <>
                Description :
                <textarea
                  rows={3}
                  cols={80}
                  defaultValue={recipeTemp.description}
                  onChange={(e) => {
                    handleChange(e, "description");
                  }}
                />
              </>
            )}
          </p>
          <p>
            {editButton ? (
              <>
                <strong>Ingredients:</strong> {recipeTemp.ingredients}
              </>
            ) : (
              <>
                Ingredients :
                <textarea
                  rows={10}
                  cols={80}
                  defaultValue={recipeTemp.ingredients}
                  onChange={(e) => {
                    handleChange(e, "ingredients");
                  }}
                />
              </>
            )}
          </p>
          <p>
            {editButton ? (
              <>
                <strong>Directions:</strong> {recipeTemp.directions}
              </>
            ) : (
              <>
                Directions :
                <textarea
                  rows={20}
                  cols={80}
                  defaultValue={recipeTemp.directions}
                  onChange={(e) => {
                    handleChange(e, "directions");
                  }}
                />
              </>
            )}
          </p>
          <img
            src={recipeTemp.photoUrl}
            alt={recipeTemp.title}
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
