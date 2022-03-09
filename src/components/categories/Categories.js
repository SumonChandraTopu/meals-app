import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([])
    const categoriesApi = `www.themealdb.com/api/json/v1/1/categories.php`;

    useEffect(() => {
        fetch(categoriesApi)
        .then(res => res.Json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Categories;