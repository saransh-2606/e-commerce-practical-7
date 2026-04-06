import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      <div className="product-grid">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              
              {/* Product Image */}
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
              />

              {/* Product Name */}
              <h4>{product.name}</h4>

              {/* Price */}
              <p className="price">₹{product.price}</p>

              {/* Button */}
              <Link to={`/product/${product._id}`}>
                <button className="btn">View Details</button>
              </Link>

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;