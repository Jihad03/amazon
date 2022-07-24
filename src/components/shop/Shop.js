import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./Shop.css";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  // Loading data and setting it to a state
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  // Getting cart data from local storage to display in the cart ui section
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.id === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  // Handle Add to cart
  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.id === product.id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.id !== product.id);
      exists.quantity += 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  // Handle Search
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
  };

  return (
    <>
      <div className="search-field">
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <p>Total Results: {displayProducts.length}</p>
      </div>
      <section className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/orders" className="review-order-btn">
              <button className="btn">Review order</button>
            </Link>
          </Cart>
        </div>
      </section>
    </>
  );
};

export default Shop;
