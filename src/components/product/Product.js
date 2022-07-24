import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, stock, ratings } = props.product;
  const { handleAddToCart } = props;
  return (
    <div className="product">
      <div className="product-img-container">
        <img src={img} alt="" />
      </div>
      <div className="product-details-container">
        <h4 className="margin-b">{name}</h4>
        <p className="margin-b">
          <small>By: {seller}</small>
        </p>
        <p className="margin-b">
          <small>Price: {price}</small>
        </p>
        <p className="margin-b">
          <small>Only {stock} left in stock - Order Now</small>
        </p>
        <Rating
          initialRating={ratings}
          emptySymbol="far fa-star icon-style"
          fullSymbol="fas fa-star icon-style"
          readonly
        />
        <br />
        <button className="btn" onClick={() => handleAddToCart(props.product)}>
          <i className="fa-solid fa-cart-shopping"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
