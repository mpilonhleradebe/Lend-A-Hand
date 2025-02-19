import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
      <NavBar />
      <Hero />
      <Popular />
      <Footer />
    </div>
  );
};

export default Home;
/*
<Popular data={skills} />
*/
