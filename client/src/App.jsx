import Home from "./pages/Home";
import ProductList from "../src/pages/ProductList";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";

import Cart from "./pages/Cart";
// import Cart from "../src/pages/Cart";

import Login from "../src/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {

  // const user = true;

  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:categories" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
              {/* { user ? <Navigate replace to="/"/> : <Login/> } */}
          <Route path="/register" element={<Register />} />
            {/* { user ? <Navigate replace to="/"/> : <Register/> } */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
