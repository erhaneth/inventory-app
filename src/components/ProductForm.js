import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the addProduct function passed as a prop to add a new product
    addProduct({ name, quantity: parseInt(quantity) });
    // Clear the form fields
    setName("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <label>
        Product Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
