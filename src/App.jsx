import React,{useState} from 'react';
import Navbar from './component/Navbar';
import Product from './component/Product';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
import SearchItem from './component/SearchItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { items } from './component/Data';

function App() {
  const [data, setData] = useState([...items])
  return (
    <>
    <Router>
      <Navbar setData={setData}/>
        <Routes>
            <Route path='/' element={<Product items={data}/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/search/:term' element={<SearchItem/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
