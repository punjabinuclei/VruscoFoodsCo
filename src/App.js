import React from "react";
import HomePage from "../src/Pages/homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "../src/Pages/contactUs"
import About from "../src/Pages/About"
import Shop from "../src/Pages/Shop"
import Navbar from "./Components/HomePage/Navbar";
import ErrorPage from "./Pages/ErrorPage";



function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="error" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


      {/* <ContactUs/> */}
      {/* <About/> */}
      {/* <Shop/> */}
    </div>
  );
}

export default App;
