import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";

const App = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
