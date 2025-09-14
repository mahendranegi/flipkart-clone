import React from "react";
import "../components/Style.css";
import { Link } from "react-router-dom";

function Product({ products = [] }) {
  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="productsSection">
      {products.map((item) => (
        <aside key={item.id}>
          <Link to="/Details" style={{ textDecoration: "none", color: "inherit" }}>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <h1>{item.title}</h1>
            <h3>{item.category}</h3>
            <strong>${item.price}</strong>
            <p>
              <span>
                {item.rating?.rate} <i className="fa-solid fa-star"></i>
              </span>{" "}
              ({item.rating?.count})
            </p>
          </Link>
        </aside>
      ))}
      
    </div>
  );
}

export default Product;
