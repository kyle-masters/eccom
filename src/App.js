import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductSingle from './pages/ProductSingle';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='product' element={<ProductSingle />} />
      </Routes>
    </Router>
  );
}

export default App;
