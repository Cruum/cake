import { useState } from 'react';
import './App.css';
import Connexion from './composants/Connexion';
import OrderPage from './OrderPage';
import ErrorPage from "./error-page";
import { Routes, Route } from 'react-router-dom';

function App() {


  return (

    <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/orderpage/:name" element={<OrderPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>



  )
}

export default App
