import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === parseInt(id));
  const handleBack = () => {
    navigate("/");
  };

  if (!product) {
    return (
      <div>
        <p>Product not found.</p>
        <button onClick={handleBack}>Back to Product List</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={handleBack}>Back to Product List</button>
    </div>
  );
};

export default ProductDetails;
