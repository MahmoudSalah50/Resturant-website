import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";
import Home from "./components/Home";
import "./assets/product.css";
import About from "./components/About";
import "./assets/about.css";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import "./menue.css";
import Cart from "./components/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import FOTTER from "./components/Fotter";
import AppNavbar from "./components/Navbar";
function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
      <FOTTER />
    </>
  );
}

export default App;
