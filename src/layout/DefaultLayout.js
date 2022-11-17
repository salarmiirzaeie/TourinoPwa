import React from "react";
import AppBar from "../components/AppBar";
import  AppContent  from "../components/AppContent";

const DefaultLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <div  className="body flex-grow-1">
          <AppContent />
        </div>
        <AppBar /> 
      </div>
    </div>
  );
};

export default DefaultLayout;
