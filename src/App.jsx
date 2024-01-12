import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import Search from "./pages/Search.jsx";
import Product from "./pages/Product.jsx";
import CheckOut from "./pages/CheckOut.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ErrorPage />} />
        </Route>
        {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} /> */}
        <Route path="/detail/:productid" element={<DetailPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search/:q" element={<Search />} />
        <Route path="/check-out" element={<CheckOut />} />
        {/* <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
