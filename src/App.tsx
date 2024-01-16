import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import Search from "./pages/Search.tsx";
import Product from "./pages/Product.tsx";
import CheckOut from "./pages/CheckOut.tsx";
import Admin from "./pages/admin/Admin.tsx";
import Login from "./pages/users/Login.tsx";
import SignUp from "./pages/users/SignUp.tsx";
import React from "react";

const App = () => {
    // const [userContext, setUserContext] = userContext()

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/detail/:productid" element={<DetailPage />} />
                <Route path="/product" element={<Product />} />
                <Route path="/search" element={<Search />} />
                <Route path="/check-out" element={<CheckOut />} />
                {/* <Route path="/account/bookings" element={<BookingsPage />} />
                <Route path="/account/bookings/:id" element={<BookingPage />} /> */}
            </Routes>
        </>
    );
};

export default App;
