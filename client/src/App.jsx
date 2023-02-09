import Home from "./pages/Home";
import ProductList from "../src/pages/ProductList";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";

import Cart from "./pages/Cart";
// import Cart from "../src/pages/Cart";

import Login from "../src/pages/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {

  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/products/:categories" element={<ProductList />} /> */}
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login">
          { user ? <Navigate to="/"/> : <Login/> }
          </Route>
          <Route path="/register" element={<Register />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* { user ? <Navigate replace to="/"/> : <Register/> } */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
