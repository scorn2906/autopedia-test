import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home-page";
import NotFoundPage from "../pages/not-found/not-found-page";
import AuthLayout from "../components/auth-layout";
import DetailProductPage from "../pages/products/detail-product-page";
import CartPage from "../pages/cart/cart-page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default AppRoutes;
