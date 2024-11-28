import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Landing from "./Views/Landing";
// import Cart from "./Views/Cart";
import AddProduct from "./Views/AddProduct";
import SignUp from './Components/SignUp/SignUp';

function App(): JSX.Element { // Indica el tipo de retorno de la función App
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
      <Route path="/addProduct" element={<AddProduct />}/>
      <Route path="/signUp" element={<SignUp />}/>
    </Routes>
  );
}

export default App;

