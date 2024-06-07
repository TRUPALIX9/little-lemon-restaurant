import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Helmet>{/* Step 1: Add the appropriate description */}</Helmet>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
