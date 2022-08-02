import React from "react";
import "./Orders.css";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../cart/Cart";
import ReviewProduct from "../reviewProduct/ReviewProduct";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  //Handle remove item
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.id !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  //Handle Place Order
  const handleShipping = () => {
    // setCart([]);
    // deleteShoppingCart();
    navigate("/shipping");
  };
  return (
    <div className="orders-container">
      <div className="ordered-product-container">
        {cart.map((product) => (
          <ReviewProduct
            product={product}
            key={product.id}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <div className="review-order-btn">
            <button onClick={handleShipping} className="btn">
              Procceed to Shipping
            </button>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
