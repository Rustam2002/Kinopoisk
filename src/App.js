import React from "react";
import Navbar from './components/Navbar'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tvshow from './pages/Tvshow';
import Newfilms from './components/Newfilms';
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Mypage' element={<Tvshow />} />
          <Route path='/Shop' element={<Tvshow />} />
          <Route path='/Tvshow' element={<Tvshow />} />
          <Route path='/Newfilms' element={<Newfilms />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
