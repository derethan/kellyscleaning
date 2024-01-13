// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import './App.css';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';


function App() {

  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <main>

     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />

     </Routes>
   
   </main>
 </BrowserRouter>
  )
}

export default App
