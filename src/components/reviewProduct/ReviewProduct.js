import React from "react";
import "./ReviewProduct.css";
import Rating from "react-rating";

const ReviewProduct = (props) => {
  const { name, price, quantity, id, img, ratings } = props.product;
  const { handleRemove } = props;
  return (
    <div className="review-product-container">
      <div className="review-product-img">
        <img src={img} alt="" />
      </div>
      <div className="review-product-details">
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <Rating
          initialRating={ratings}
          emptySymbol="far fa-star icon-style"
          fullSymbol="fas fa-star icon-style"
          readonly
        />
        <button onClick={() => handleRemove(id)} className="btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewProduct;
