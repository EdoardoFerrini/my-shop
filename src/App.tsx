import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "@/shared/index";
import {
  CartPage,
  CheckoutPage,
  CMSOrdersPage,
  CMSPage,
  CMSProductsPage,
  LoginPage,
  ShopPage,
  ThanksPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="thankyou" element={<ThanksPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="cms" element={<CMSPage />}>
            <Route path="products" element={<CMSProductsPage />}></Route>
            <Route path="orders" element={<CMSOrdersPage />}></Route>
            <Route index element={<Navigate to="products" />}></Route>
          </Route>

          <Route path="*" element={<Navigate to="shop" />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
