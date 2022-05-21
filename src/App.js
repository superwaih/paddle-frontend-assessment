import { React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Github from "./pages/Github";

function App() {
  return (
    <BrowserRouter>
    <div className="App ">
     <Navbar />

     <Routes>
     <Route path='/' exact element={<ComingSoon />} />
     <Route path='/contact' exact element={<Contact /> } />
     <Route path='/blog' exact element={<Blog /> } />
     <Route path='/about' exact element={<About /> } />  
     <Route path='/github' exact element={<Github /> } />  
     
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
