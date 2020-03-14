
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />  
        <Footer />
      </div>
    </Router>
  );
}

export default App;