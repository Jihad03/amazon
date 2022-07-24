import React from "react";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total += product.price * product.quantity;
    totalQuantity += product.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.101;
  const subTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order Summery</h3>
      <p>Items Ordered: {totalQuantity}</p>
      <p>Total: {total}</p>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <p>Subtotal: {subTotal}</p>
      {props.children}
    </div>
  );
};

export default Cart;
