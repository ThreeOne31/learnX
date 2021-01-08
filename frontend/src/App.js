import React from "react"
import { BrowserRouter } from "react-router-dom"


import Header from "./components/Header";
import Footer from "./components/Footer";
import PageRouter from "./Routes"
import "./styles"

function App() {
  return (
      <BrowserRouter>
          <Header />
          <PageRouter />
          <Footer />
      </BrowserRouter>
  );
}

export default App;
