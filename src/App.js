import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import Orders from "./components/orders/Orders";
import Inventory from "./components/inventory/Inventory";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateOutlet from "./components/PrivateOutlet/PrivateOutlet";
import Shipping from "./components/Shipping/Shipping";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="inventory" element={<Inventory />} />
          <Route path="placeorder" element={<PlaceOrder />} />
          <Route path="shipping" element={<Shipping />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
