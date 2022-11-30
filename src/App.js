import React from 'react';
import { Route, Routes } from 'react-router-dom';
//React imoport
import './App.css';
import Contactpage from './Component/Pages/ContactPage/Contactpage';
import Errorpage from './Component/Pages/ErrorPage/Errorpage';
import Filterpage from './Component/Pages/FilterPage/Filterpage';
//CSS import
import Homepage from './Component/Pages/HomePage/Homepage';
import Mappage from './Component/Pages/MapPage/Mappage';
import Qapage from './Component/Pages/QandAPage/Qapage';
import Footer from './Component/Tools/Footer/Footer';
import Navbar from './Component/Tools/Navbar/Navbar';
//Component import

function App() {
  return (
    <div className="container-main">
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/qanda' element={<Qapage />}/>
          <Route path='/map' element={<Mappage />} />
          <Route path='/contact' element={<Contactpage />}/>
          <Route path='/search/filter/'>
            <Route path=':type' element={<Filterpage />}/>
          </Route>
          <Route path='*' element={<Errorpage />}/>
        </Routes> {/* Use Router in react-router-dom */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
