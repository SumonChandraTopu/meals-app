import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Meals.css"

const Meal = ({ meal }) => {
 
  const {
    strMeal,
    idMeal,
    strCategory,
    strTags,
    strInstructions,
    strMealThumb,
  } = meal;
 
  
  const url = `/meal/${idMeal}`
  return (
    <>
      <div className="col-lg-3 col-sm-12 col-md-6 rounded card-item">
        <img className="w-100" src={strMealThumb} alt="" />
        <h2>{strMeal}</h2>
       
        <Link to={url}>Details</Link>
      </div>
    </>
  );
};

export default Meal;
