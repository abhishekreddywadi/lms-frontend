/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "../src/pages/HomePage";
import Footer from "./components/Footer";
import HomeLayout from "./Layouts/HomeLayout";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CourseDescription from "./pages/CourseDescription";
import CourseList from "./pages/courses/CourseList";
import Denied from "./pages/Denied";
import Login from "./pages/Login";
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
        <Route path="/course" element={<CourseList />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/denied" element={<Denied />}></Route>
        <Route
          path="/course/description"
          element={<CourseDescription />}
        ></Route>

        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
