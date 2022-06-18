/* eslint-disable prettier/prettier */
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import LoginPage from "./pages/auth/Login";
// import RegisterPage from "./pages/auth/Register";
import AddProductPage from "./pages/AddProduct";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/addproduct" element={<AddProductPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
