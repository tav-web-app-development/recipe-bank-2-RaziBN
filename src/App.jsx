import { useEffect, useState, useMemo } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const ourResult = useMemo(() => filterRecipesComputeIntensive, []);
  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
    return () => console.log("unmounted");
  }, []);
  function filterRecipesComputeIntensive(recipes) {
    const now = performance.now();
    while (performance.now() - now < 8000) {
      //spin()
    }
    return list.filter((word) => word.name.split(" ").length <= 4);
  }

  function deleteFromArray(id) {
    setRecipes(recipes.filter((recipes) => recipes.id !== id));
  }
  // const filteredRecipes = filterRecipesComputeIntensive(recipes);
  return (
    <>
      <Navbar />
      {recipes.map((data) => (
        <RecipeContainer
          recipe={data}
          key={data.id}
          deleteFromArray={deleteFromArray}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
