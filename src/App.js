import React from 'react';
import Home from "./componets/home/home";
import Properties from "./componets/home/properties";
import Contact from "./componets/home/contact";
import NavBar from './componets/navbar/navbar';
import Propertydetails from './componets/home/propertydetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/propertydetails" element={<Propertydetails />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;