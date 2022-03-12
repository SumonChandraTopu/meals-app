import React, { useState } from "react";
import Meal from "../meals/Meal";
import mealsData from "../../MEALS.json";
import "./Meals.css";
import NameMeals from "../nameMeal/NameMeals";
const Meals = () => {
  const [searchResult, setSearchResult] = useState("");

  

  return (
    <div>
      {/*
      =================== Head Area Start ================
      */}
      <div className="header py-5">
        <h1>Welcome to Meals App</h1>
        <input
          className="input-field"
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
          type="text"
          placeholder="Search for meal..."
        />

        {/*
      =================== Head Area End ================
      */}
      <NameMeals />
      {/*
      =================== Meals Section Start ================
      */}
        <div className="container">
          <div className="row gap-auto mt-5">
            {mealsData
              .filter((meals) => {
                if (meals === "") {
                  return meals;
                } else if (
                  meals.strMeal
                    .toLowerCase()
                    .includes(searchResult.toLowerCase())
                ) {
                  return meals;
                }
              })
              .map((meal) => (
                <Meal key={meal.idMeal} meal={meal} />
              ))}
          </div>
        </div>
        {/*
      =================== Meals Section End ================
      */}
      </div>
    </div>
  );
};

export default Meals;
