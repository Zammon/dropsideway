import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
//React imoport
import './App.css';
import Contactpage from './Component/Pages/ContactPage/Contactpage';
import Errorpage from './Component/Pages/ErrorPage/Errorpage';
import Filterpage from './Component/Pages/FilterPage/Filterpage';
//CSS import
import Homepage from './Component/Pages/HomePage/Homepage';
import Mappage from './Component/Pages/MapPage/Mappage';
import Postpage from './Component/Pages/PostPage/Postpage';
import Qapage from './Component/Pages/QandAPage/Qapage';
import Footer from './Component/Tools/Footer/Footer';
import Navbar from './Component/Tools/Navbar/Navbar';
//Component import
import { api } from './ModuleUrl';
//Url import

function App() {

  useEffect(()=>{

  },[]);

  return (
    <div className="container-main">
      <Navbar />
        <Routes>
          {/* Homepage */}
          <Route path='/' element={<Homepage />}/>
          {/* Q&Apage */}
          <Route path='/qanda' element={<Qapage />}/>
          {/* Mappage */}
          <Route path='/map' element={<Mappage />} />
          {/* Contactpage */}
          <Route path='/contact' element={<Contactpage />}/>
          {/* Filterpage */}
          <Route path='/search/filter'>
            <Route path=':type' element={<Filterpage />}/>
          </Route>
          {/* PostPage */}
          <Route path='/post'>
            <Route path=':id' element={<Postpage />} />
          </Route>
          {/* Errorpage */}
          <Route path='*' element={<Errorpage />}/>
        </Routes> {/* Use Router in react-router-dom */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
