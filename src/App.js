import { React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="App h-screen">
     <Navbar />

     <Routes>
     <Route path='/' exact element={<ComingSoon />} />
     <Route path='/contact' exact element={<Contact /> } />
     <Route path='/blog' exact element={<Blog /> } />
     <Route path='/about' exact element={<About /> } />  
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
