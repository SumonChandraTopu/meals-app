import { BrowserRouter, Route,  Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MealDetails from "./components/meals/MealDetails";
import NameMeals from "./components/nameMeal/NameMeals";
import NameMealDetails from "./components/nameMeal/NameMealDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/firstName" element={<NameMeals />} />
          <Route path="/meal/:mealId" element={<MealDetails />} />
          <Route path="/meal/firstName/:mealId" element={<NameMealDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
