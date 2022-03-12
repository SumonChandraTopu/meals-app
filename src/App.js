import { BrowserRouter, Route,  Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MealDetails from "./components/meals/MealDetails";
import NameMeals from "./components/nameMeal/NameMeals";
import NameMealDetails from "./components/nameMeal/NameMealDetails";
import Categories from "./components/categories/Categories"

import Navbar from "./components/common/Navbar";
import CategoryDetail from "./components/categories/CategoryDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/firstName" element={<NameMeals />} />
          <Route path="/meals/category" element={<Categories />} />
          <Route path="/meals/category/detail" element={<CategoryDetail />} />
          <Route path="/meal/:mealId" element={<MealDetails />} />
          <Route path="/meal/firstName/:mealId" element={<NameMealDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
