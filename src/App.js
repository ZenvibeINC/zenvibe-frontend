import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Landing from "./Views/Landing";
import Cart from "./Views/Cart";
import AddProduct from "./Views/AddProduct";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/addProduct" element={<AddProduct />}/>
    </Routes>
  );
}

export default App;
