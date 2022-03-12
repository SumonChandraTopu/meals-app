import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryDetail from "./CategoryDetail";

const Category = ({ category }) => {
    const [categoryDetails, setCategoryDetails] = useState([]);
    const navigate = useNavigate()
  const { idCategory, strCategory, strCategoryThumb } = category;
  const handleCategory = e => {
      const value = e.target.innerHTML;
      const apiC = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`; 

      fetch(apiC)
      .then(res => res.json())
      .then(data => setCategoryDetails(data.meals))
    //   navigate("/meals/category/detail";
  }
  return (
    <>
      <div className="col-lg-3 col-sm-12 col-md-6 rounded card-item">
        <small>{idCategory}</small>
        <img className="w-100 mt-4" src={strCategoryThumb} alt="" />
        <button onClick={handleCategory}>{strCategory}</button>
        {
            categoryDetails.map(detail => <CategoryDetail detail={detail} />)
        }
      </div>
    </>
  );
};

export default Category;
