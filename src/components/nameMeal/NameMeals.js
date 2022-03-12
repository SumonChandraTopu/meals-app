import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../meals/Meals.css";
import NameMeal from "./NameMeal";

const NameMeals = () => {
  const [mealByName, setMealByName] = useState([]);
  const navigate = useNavigate();
  const handleClick = (e) => {
    const value = e.target.innerHTML;
    const apiByName = `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;

    fetch(apiByName)
      .then((res) => res.json())
      .then((data) => setMealByName(data.meals));

    if (mealByName.length === 0) {
      return navigate("/meal/firstName");
    } else if (!mealByName.length === 0) {
      return navigate("/meal/firstName");
    }
  };
  return (
    <div className="container">
     
      <div className="name-meal-head ">
        <h3>Search By First Name</h3>
      </div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            A
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            B
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            C
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            D
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            E
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            F
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            G
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            H
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            I
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            J
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            K
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            L
          </button>
        </li>

        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            M
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            N
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            O
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            P
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            Q
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            R
          </button>
        </li>

        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            S
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            T
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            U
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            V
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            W
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            X
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            Y
          </button>
        </li>
        <li className="nav-item">
          <button onClick={handleClick} className="nav-link">
            Z
          </button>
        </li>
      </ul>
      <div className="row gap-auto mt-5">
        {mealByName.map((nameMeal) => (
          <NameMeal nameMeal={nameMeal} key={nameMeal.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default NameMeals;
