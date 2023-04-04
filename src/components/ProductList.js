import React, { useState } from "react";
import ProductForm from "./ProductForm";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Yogurt", quantity: 10 },
    { id: 2, name: "Milk", quantity: 8 },
    // Initial products
  ]);

  const addProduct = (newProduct) => {
    // Generate a new ID for the new product
    const newId = products.length + 1;
    // Add the new product to the list
    setProducts([...products, { id: newId, ...newProduct }]);
  };
  const increaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const decreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => increaseQuantity(product.id)}>
                  Increase
                </button>
                <button onClick={() => decreaseQuantity(product.id)}>
                  Decrease
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProductForm addProduct={addProduct} />
    </div>
  );
};

export default ProductList;
