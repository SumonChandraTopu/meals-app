import React, { useEffect, useState } from "react";
import NameMeals from "../nameMeal/NameMeals";
import Category from "./Category";
import "./Category.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const categoryAPI = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  useEffect(() => {
    fetch(categoryAPI)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div className="container">
      <div className="category-head">
        <h2>Meals category</h2>
        <NameMeals />
      </div>
      <div className="category">
        <div className="name-meal-head">
          <h3>Meals Category</h3>
        </div>
        <div className="row gap-auto mt-5">
          {categories.map((category) => (
            <Category key={category.idCategory} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
