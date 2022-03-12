import React from "react";
import { Link } from "react-router-dom";

const NameMeal = ({ nameMeal }) => {
  const { strMeal, idMeal, strMealThumb } = nameMeal;

  const url = `/meal/${idMeal}`;
  return (
    <>
      <div className="col-lg-3 col-sm-12 col-md-6 rounded card-item">
        <img className="w-100" src={strMealThumb} alt="" />
        <h2 className="fs-5 py-2">{strMeal}</h2>

        <Link to={url}>Details</Link>
      </div>
    </>
  );
};

export default NameMeal;
