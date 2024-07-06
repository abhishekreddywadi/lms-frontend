/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../components/CourseCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";

function CourseList() {
  const dispatch = useDispatch();
  // dispatch(getCourses())
  const { courseData } = useSelector((state) => state.course);
  console.log(courseData);
  const getCourses = async () => {
    await dispatch(getAllCourses());
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div>
      <HomeLayout>
        <div className="min-h-[90vh] pt-12 pl-20 flex flex-col  items-center justify-center   gap-y-10 text-white">
          <h1 className="text-center text-3xl font-semibold ">
            Explore the Courses made by
            <span className="font-bold text-yellow-500 ">Industry Experts</span>
          </h1>
          <div className="mb-10 flex flex-wrap gap-10  items-center  justify-start w-[80vw]  ">
            {courseData?.map((course) => {
              // eslint-disable-next-line react/jsx-key
              return <CourseCard data={course} />;
            })}
          </div>
        </div>
      </HomeLayout>
    </div>
  );
}

export default CourseList;
