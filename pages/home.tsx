import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl text-center mt-10">Welcome to your new app!</h1>
        <p className="text-center mt-5">
          This is a simple starter template for your new app.
        </p>
      </div>
    </>
  );
};

export default Home;
