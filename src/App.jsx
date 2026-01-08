import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RecipeDetailView from "./components/RecipeDetailView";
import SearchView from "./components/SearchView";
import Cuisine from "./components/Cuisine";
import HomeView from "./components/HomeView";

import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
          <Navbar/> 
          <Cuisine/>
          <Routes>
            <Route path='/' element={<HomeView/>}/>
            <Route path='/recipe/:id' element={<RecipeDetailView/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
