import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdminDashBoard from "./components/pages/AdminDashBoard";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Tracking from "./components/pages/Tracking";
import TrackingDetails from "./components/pages/TrackingDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:orderId" element={<TrackingDetails />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/dashboard" element={<AdminDashBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
