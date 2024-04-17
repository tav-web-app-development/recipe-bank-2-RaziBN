import React from "react";
import { Link } from "react-router-dom";

function NewRecipe() {
  return (
    <div>
      <h1>Add New Recipe</h1>
      <form>
        <label>Title</label>
        <input type="text" />
        <br />
        <label>Ingredients</label>
        <input type="text" />
        <br />
        <label>Directions</label>
        <input type="text" />
        <br />
        <button onClick={(e) => e.preventDefault()}>
          <Link to="/">Add Recipe</Link>{" "}
        </button>
      </form>
    </div>
  );
}

export default NewRecipe;
