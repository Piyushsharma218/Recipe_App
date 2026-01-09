import { useCallback, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RecipeDetailView from "./components/RecipeDetailView";
import SearchView from "./components/SearchView";
import Cuisine from "./components/Cuisine";
import HomeView from "./components/HomeView";
import { API_URL } from "./components/useFetch";

import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = useCallback(async (query, filterType) => {
    setSearchResult([]);
    setSearchLoading(true);

    try {
      const res = await fetch(`${API_URL}filter.php?${filterType}=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
          <Navbar handleSearch={handleSearch} />
          <Cuisine />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
            <Route
              path="/search/:query"
              element={
                <SearchView meals={searchResult} loading={searchLoading} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
