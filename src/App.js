// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Infographic from "./components/Infographic";
import Conclusion from "./components/Conclusion";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/infographic" element={<Infographic />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
