import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Search from "./pages/Search";
import Product from "./pages/products/Product";
import CheckOut from "./pages/carts/CheckOut";
import Admin from "./pages/admin/Admin";
import Login from "./pages/users/Login";
import SignUp from "./pages/users/SignUp";
import { UserContextProvider } from "./pages/users/UserContext";
import Profile from "./pages/users/Profile";
import CartContext from "./pages/carts/CartContext";

const App = () => {
  return (
    <>
      <CartContext>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/search" element={<Search />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </UserContextProvider>
      </CartContext>
    </>
  );
};

export default App;
