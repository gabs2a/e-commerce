import { HomePage } from "./Pages/HomePage/HomePage";
import "./reset.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsPage } from "./components/ProductsPage/ProductsPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
