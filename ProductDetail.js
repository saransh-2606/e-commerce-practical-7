import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProduct(id).then(res => setProduct(res.data));
  }, [id]);

  return (
    <div className="product-card">

      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
      />

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <h3 className="price">₹{product.price}</h3>

      <button className="btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductDetail;