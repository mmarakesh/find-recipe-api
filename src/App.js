import { useEffect, useState } from 'react';
import './App.css';
import video from "./food.mp4";
import MyReComponent from './MyReComponent';



function App() {

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmit, setWordSubmit] = useState("cherry");

useEffect(() => {
  const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=adb428bd&app_key=8f5b7d5ef9a4a738368faea1cd169d44`);
  const data = await response.json();
  console.log(data.hits);
  setMyRecipes(data.hits);
}
getRecipe()
}, [wordSubmit])

const myRecipeSearch = (e) => {
console.log(e.target.value);
setMySearch(e.target.value);
}

const finalSearch = (e) => {
e.preventDefault();
setWordSubmit(mySearch)
}


  return (
<div className="App">

<div className="container">
<video autoPlay muted loop>
<source src={video} type="video/mp4" />
</video>
<h1>Find a Recipe</h1>
</div>

<div className='container'>
    <form onSubmit={finalSearch}>
        <input className='search' onChange={myRecipeSearch} value={mySearch}/>
    </form>
</div>

<div className='container'>
    <button onClick={finalSearch}>
        <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>

{myRecipes.map((element, index) => (
  <MyReComponent key = {index} label = {element.recipe.label}
                 image = {element.recipe.image}
                calories = {element.recipe.calories}
                ingredients = {element.recipe.ingredientLines}/>
))}

</div>


  );
}

export default App;
