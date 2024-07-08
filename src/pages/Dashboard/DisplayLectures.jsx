import React, { useEffect } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCourseLecture } from "../../Redux/Slices/LectureSlice";

function DisplayLectures() {
  // Add logic to fetch lectures from API and display them here.
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  // Add navigation to course details page when a lecture is clicked
  useEffect(() => {
    // dispatch(getAllLectures())
    // if (!state) navigate("/course");
    dispatch(getCourseLecture(state._id));
    console.log(state._id);
  }, []);

  // Example:

  return (
    <HomeLayout>
      <div></div>
    </HomeLayout>
  );
}

export default DisplayLectures;
