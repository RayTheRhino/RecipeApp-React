import React from "react";
import './Recipe.css'

const Recipe = ({ title, calories, image, ingredients }) => {
return (
    <div className="recpie">
        <h1>{title}</h1>
        <h4>ingredients:</h4>
        <ol>
            {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
            ))}
        </ol>
        <p> <b>Calories:</b> {calories}</p>
        <img className="img" src={image} alt="" />
    </div>
    );
};

export default Recipe;
