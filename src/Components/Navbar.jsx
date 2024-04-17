/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Navbar({ bottomRef }) {
  return (
    <>
      <div className="navbar">
        <h1>Recipe App</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/newRecipe">Add New Recipe</Link>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scrollTo({
                    // eslint-disable-next-line react/prop-types
                    top: bottomRef.current.offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                End to the Page
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
