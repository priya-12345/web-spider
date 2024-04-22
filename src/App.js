import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        {  <Body />}
        {/* If empty, maintain minimum height using CSS */}
      </div>
    
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);