import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/productpage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

