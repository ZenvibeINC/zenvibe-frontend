import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Views/Home";
// import Landing from "./Views/Landing";
// import Cart from "./Views/Cart";
// import AddProduct from "./Views/AddProduct";
// import SignUp from './Components/SignUp/SignUp'
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Landing />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/addProduct" element={<AddProduct />}/>
//       <Route path="/signUp" element={<SignUp />}/>
//     </Routes>
//   );
// }
// export default App;
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Landing from "./Views/Landing";
// import Cart from "./Views/Cart";
import AddProduct from "./Views/AddProduct";
import SignUp from './Components/SignUp/SignUp';
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Landing, {}) }), _jsx(Route, { path: "/home", element: _jsx(Home, {}) }), _jsx(Route, { path: "/addProduct", element: _jsx(AddProduct, {}) }), _jsx(Route, { path: "/signUp", element: _jsx(SignUp, {}) })] }));
}
export default App;
//# sourceMappingURL=App.js.map