import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import InfoProfilePage from "./pages/InfoProfile";
import InfoProductPage from "./pages/seller/InfoProduct";
import PreviewProductPage from "./pages/seller/PreviewProduct";
import ListProductPage from "./pages/seller/ListProduct";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/info-profile" element={<InfoProfilePage />} />
        <Route path="/seller/info-product" element={<InfoProductPage />} />
        <Route
          path="/seller/preview-product"
          element={<PreviewProductPage />}
        />
        <Route path="/seller/list-product" element={<ListProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
