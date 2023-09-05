
import React from 'react';

import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Coins from './component/Coins';
import Exchanges from './component/Exchanges';
import CoinDetails from './component/CoinDetails';
import Footer from './component/Footer';



function App() {
  return (
  
    <Router>
       <Header/>
      <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coin/:id' element={<CoinDetails/>}/>
      <Route path='/exchange' element={<Exchanges/>}/>
      </Routes>
      <Footer/>
    </Router>
  
  
  );
}

export default App;
