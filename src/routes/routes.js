import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';


// 

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    {/* <Route path="/products/product/:productId" element={<ProductDetail />} /> */}

    {/* <Route path="/dashboard" element={<PrivateRoute isAuthenticated={userIsLoggedIn}><Dashboard /></PrivateRoute>}/> */}
    {/* Add more routes as needed */}
  </Routes>
);

export default routes;