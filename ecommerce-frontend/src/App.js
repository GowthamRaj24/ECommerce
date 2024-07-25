
import './App.css';
import Homepage from '../src/pages/homepage/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../src/components/Header/Header';
import HeaderCartBox from './components/CartHandle/CartBox';
import { useState } from 'react';

function App() {
  const [HeaderCart,setHeaderCart] = useState(false);

    const openCart = (val) => {
        setHeaderCart(val);
    }

  return (
    <div className="App" style={{ backdropFilter : HeaderCart ? "brigtness(0.5)" :"brigtness(1)"}}>

      <Header openCart={openCart}/>
      <HeaderCartBox openCart={openCart} HeaderCart={HeaderCart}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
