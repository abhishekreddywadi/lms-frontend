/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "../src/pages/HomePage";
import Footer from "./components/Footer";
import HomeLayout from "./Layouts/HomeLayout";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      {/* <Footer /> */}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
