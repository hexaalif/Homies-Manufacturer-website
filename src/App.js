import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Pages/Home/Home/Home';
import Header from './Component/Pages/Shared/Header';
import Login from './Component/Pages/Login/Login';
import Products from './Component/Pages/Products/Products';
import Portfolio from './Component/Pages/Portfolio/Portfolio';
import Blog from './Component/Pages/Blog/Blog';
import NotFound from './Component/Pages/Shared/NotFound/NotFound';
import Footer from './Component/Pages/Shared/Footer';
import SignUp from './Component/Pages/Login/SignUp';
import ProductDetail from './Component/Pages/ProductDetail/ProductDetail';
import RequireAuth from './Component/Pages/Login/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/purchase" element={
        <RequireAuth>
          <ProductDetail />
        </RequireAuth>
      } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
