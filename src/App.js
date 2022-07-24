import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import Orders from "./components/orders/Orders";
import Inventory from "./components/inventory/Inventory";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
