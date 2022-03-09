import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MealDetails from "./components/meals/MealDetails";
import NameMeals from "./components/nameMeal/NameMeals";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:mealId" element={<MealDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
