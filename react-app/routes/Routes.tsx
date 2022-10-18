import React from "react";
import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";

// pages
import Home from "./pages/Home/Home"
import Details from "./pages/Details/Details"


const Routes = () => {
  return (
    <div className="Routes w-screen h-screen bg-white">
        <RoutesDom>
          <Route path="/detail" element={<Details />} />
          <Route path="/" element={<Home />} />
        </RoutesDom>

    </div>
  );
};

export default Routes;
