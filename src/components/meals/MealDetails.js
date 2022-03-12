import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Meals.css";

const MealDetails = () => {
  const [meal, setMeal] = useState([]);
  const [islLoading, setIsLoading] = useState(true);
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
  } = meal;
  const { mealId } = useParams();
  const urlById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  useEffect(() => {
    fetch(urlById)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
    setIsLoading(false);
  }, []);
  return (
    <div>
      {islLoading ? (
        <div className="loading">
          <h2>Loading....</h2>
        </div>
      ) : (
        <div>
          <h1 className="head">{strMeal} Details</h1>
          <div className="container d-flex gap-5 py-5">
            <div className="mealImg p-1 w-50">
              <img className="w-100" src={strMealThumb} alt="meal img" />
            </div>
            <div className="meal-details w-50 text-start p-2">
              <h4 className="m-0">{strMeal}</h4>
              <small>
                <span className="fs-6 bg-secondary px-2 py-0 rounded-pill">
                  {strCategory}
                </span>
              </small>
              <h3>Area:- {strArea}</h3>
              <p>
                <span className="fw-bold">Details :-</span> {strInstructions}
              </p>
              <Link to="/" className="btn btn-lg bg-dark btn-dark">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealDetails;
