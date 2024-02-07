import React,{useState} from 'react';
import Navbar from './component/Navbar';
import Product from './component/Product';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
import SearchItem from './component/SearchItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import items from './data.json';

function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
      <Navbar cart={cart} setData={setData}/>
        <Routes>
            <Route path='/' element={<Product cart={cart} setCart={setCart} items={data}/>}/>
            <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart}/>}/>
            <Route path='/search/:term' element={<SearchItem cart={cart} setCart={setCart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
