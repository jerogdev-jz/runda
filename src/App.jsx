import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/layout/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Catalog from './pages/Catalog/Catalog';
import Checkout from './pages/Checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';
import ProductDetail from './pages/ProductDetail/ProductDetail';


function App() {
  
  return (
    <>
      <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogo' element={<Catalog />} />
            <Route path='/producto/:id' element={<ProductDetail />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      <Footer />
    </>
  )
}

export default App
