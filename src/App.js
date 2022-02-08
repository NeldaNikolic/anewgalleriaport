import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Galleria from "./components/galleria/Galleria";
import ViewPort from "./components/viewport/ViewPort";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<><Home /> <About /> <Galleria /></>} />
          <Route path="about" element={<About />} />
          <Route path="view-port" element={<ViewPort />} />
          <Route path="galleria" element={<Galleria />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<><Home /></>} />
        </Routes>
        <Footer/>
        {/* <Home />
          <Galleria />
          <About />
          <Contact /> */}
      </div>
    );
  }
}

export default App;