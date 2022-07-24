import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import InfoProfilePage from "./pages/InfoProfile";
import InfoProductPage from "./pages/seller/InfoProduct";
import UpdateProductPage from "./pages/seller/UpdateProduct";
import PreviewProductPage from "./pages/seller/PreviewProduct";
import ListProductPage from "./pages/seller/ListProduct";
import InfoBidderPage from "./pages/seller/InfoBidder";
import ProductPage from "./pages/buyer/PreviewProduct";
import NotFound from "./pages/NotFound";

import { history } from "./helpers/history";

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/info-profile" element={<InfoProfilePage />} />
        <Route path="/seller/info-product" element={<InfoProductPage />} />
        <Route
          path="/seller/info-product/:id"
          element={<UpdateProductPage />}
        />
        <Route
          path="/seller/preview-product/:id"
          element={<PreviewProductPage />}
        />
        <Route path="/seller/list-product" element={<ListProductPage />} />
        <Route path="/seller/info-bidder" element={<InfoBidderPage />} />
        <Route path="/buyer/preview-product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
