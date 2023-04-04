import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Weather from "./components/Weather";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Yogurt", quantity: 10 },
    { id: 2, name: "<ilk>", quantity: 8 },
    // Initial products
  ]);

  return (
    <Router>
      <div className="App">
        <h1>Inventory Management App</h1>
        <Weather />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
