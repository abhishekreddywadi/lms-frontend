import React, { useEffect } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../Redux/Slices/StatsSlice";
import { deleteCourse, getAllCourses } from "../../Redux/Slices/CourseSlice";
import { Pie } from "react-chartjs-2";
import { FaUsers } from "react-icons/fa";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

function Admindashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allUserCount } = useSelector((state) => state.stats);

  const users = async () => {
    const data = await dispatch(getAllUsers());
    console.log(data);
  };
  const userData = {
    labels: ["Registered Users", "All Users"],
    datasets: [
      {
        label: "Users",
        data: [allUserCount, allUserCount * 3],
        backgroundColor: ["#ff7043", "yellow"],
        hoverBackgroundColor: ["#ff7043", "red"],
        borderWidth: 1,
        hoverBorderColor: ["#ff7043", "yellow"],
      },
    ],
  };
  const myCourses = useSelector((state) => state.course?.courseData);
  const onCourseDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete ? ")) {
        const data = await dispatch(deleteCourse(id));
        // console.log(id);
        console.log(data);
        if (data?.payload?.status) {
          await dispatch(getAllCourses());
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    users();
    // eslint-disable-next-line
  }, []);
  return (
    <HomeLayout>
      <div className="h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white">
        <h1 className="text-center text-5xl font-semibold text-yellow-500 ">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-2 gap-5 m-auto mx-10">
          <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
            <div className="w-80 h-80">
              <Pie data={userData} />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center justify-center p-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center ">
                  <p className="font-semibold ">All Users</p>
                  <h3 className="text-4xl font-bold">{allUserCount}</h3>
                </div>
                <FaUsers className="text-yellow-500 text-5xl" />
              </div>
              <div className="flex items-center justify-center p-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center ">
                  <p className="font-semibold ">Registered Users</p>
                  <h3 className="text-4xl font-bold">{allUserCount * 3}</h3>
                </div>
                <FaUsers className="text-yellow-100 text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[100%]  flex flex-col items-center justify-center mt-10 gap-10 mb-10">
        <h1 className="text-center  text-3xl font-semibold">
          Courses Overview
        </h1>
        <button
          onClick={() => navigate("/course/create")}
          className="w-fit py-1 px-2 text-white bg-yellow-600 hover:bg-yellow-500 rounded-md transition-all ease-in-out duration-300"
        >
          Create new course
        </button>
        <div className="flex w-full justify-center">
          <table className="table overflow-x-scroll w-[80%] ">
            <thead>
              <tr>
                <th>S No</th>
                <th> Course Title </th>
                <th> Course Category </th>
                <th> Instructor </th>
                <th> Total Lectures </th>
                <th> Description </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {myCourses?.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course.title}</td>
                  <td>{course.category}</td>
                  <td>{course.createdBy}</td>
                  <td>{course.numbersOfLectures}</td>
                  <td>{course.description}</td>
                  <td>
                    <button
                      onClick={() => onCourseDelete(course._id)}
                      className="px-2 py-1 text-white bg-red-600 hover:bg-red-500 rounded-md transition-all ease-in-out duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Admindashboard;
