import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import Search from "./pages/Search.jsx";
import Product from "./pages/Product.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Login from "./pages/users/Login.jsx";
import SignUp from "./pages/users/SignUp.jsx";

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
