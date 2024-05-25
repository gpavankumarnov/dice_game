import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList/UsersList";
import Home from "./pages/Homepage/Home";
const RoutesComp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComp;
