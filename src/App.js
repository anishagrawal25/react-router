import React from "react";

// TODO 1: Import BrowserRouter, Routes, Route from react-router-dom
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// TODO 2: Import all pages (Home, About, Contact)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <div>
      {/* TODO 3: Wrap everything inside BrowserRouter */}

      <Navbar />
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
      </Routes>

      {/* TODO 4: Replace this with Routes */}
      {/* 
        Create routes:
        "/" → Home
        "/about" → About
        "/contact" → Contact
      */}

    </div>

    </BrowserRouter>
  
  );
}

export default App;
