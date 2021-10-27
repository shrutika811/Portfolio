import React from "react";
import About from "./components/About/About2.Component.jsx";
import Contact from "./components/Contact/Contact.Component.jsx";
import Navbar from "./components/Navbar/Navbar.Component";
import Projects from "./components/Projects/Projects.Component";
import Skills from "./components/Skills/Skills.Component.jsx";
//import DefaultHOC from "./HOC/Default.HOC";

//import HomePage from "./pages/Home.Page";
//<DefaultHOC path="/" exact component={HomePage}/> 




function App() {
  return (
    <>
      <main>
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
       
    </>
  );
}

export default App;
