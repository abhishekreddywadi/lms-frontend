/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "../src/pages/HomePage";
import Footer from "./components/Footer";
import HomeLayout from "./Layouts/HomeLayout";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      {/* <Footer /> */}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
