// import React from 'react'

import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { createCourse } from "../../Redux/Slices/CourseSlice";

function CreateCourse() {
  const [image, setImage] = useState("");
  const [imagepreview, setImagepreview] = useState("");

  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const [userInput, serUserInput] = useState({
    title: "",
    description: "",
    category: "",
    createdBy: "",
    thumbnailImage: "", // for storing the thumbnail image
    // previewImage: "",
  });
  const handlUserInput = (event) => {
    serUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  const getImage = (event) => {
    //  getting the image
    const uploadedImage = event.target.files[0];
    console.log(uploadedImage);
    if (uploadedImage) {
      const reader = new FileReader();
      reader.readAsDataURL(uploadedImage);
      reader.addEventListener("load", () => {
        setImage(uploadedImage);
        serUserInput({ ...userInput, thumbnailImage: image });
        setImagepreview(reader.result);

        // console.log(reader.result);
      });
    }
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (
      !userInput.category ||
      !userInput.title ||
      !userInput.description ||
      !userInput.createdBy ||
      !userInput.thumbnailImage
    ) {
      return toast.error("Please fill all required fields");
    }
    const formData = new FormData();
    formData.append("title", userInput.title);
    formData.append("description", userInput.description);
    formData.append("category", userInput.category);
    formData.append("createdBy", userInput.createdBy);
    formData.append("thumbnailImage", image);
    // dispatching  the create course
    const response = await dispatch(createCourse(formData));
    // if the course is created successfully clear the form and navigate to course page  else show error message
    if (response.payload?.success) {
      serUserInput({
        title: "",
        description: "",
        category: "",
        createdBy: "",
      });
    }
    // dispatch(createCourse(userInput));
    // navigate("/course");
  };
  return (
    <div>
      <HomeLayout>
        <div className="flex items-center justify-center h-[90vh]">
          <form
            action=""
            encType="multipart/form-data"
            onSubmit={onFormSubmit}
            className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-lg relative"
          >
            <Link className="absolute top-8 text-2xl link text-accent cursor-pointer ">
              <AiOutlineArrowLeft />
            </Link>
            <h1 className="text-center text-2xl font-bold ">
              Create New Course
            </h1>
            <main className="grid grid-cols-2 gap-x-10 ">
              <div className="gap-y-6 ">
                <div>
                  <label htmlFor="image_uploads" className="cursor-pointer">
                    {imagepreview ? (
                      <img
                        src={imagepreview}
                        alt="courseImage"
                        className="w-full h-44 m-auto border"
                      />
                    ) : (
                      <div className="w-full h-44 m-auto flex rounded-sm items-center justify-center border">
                        <h1 className="font-bold text-lg">
                          Upload your course thumbnail
                        </h1>
                      </div>
                    )}
                  </label>
                  <input
                    type="file"
                    className="hidden"
                    id="image_uploads"
                    accept=".jpg,.png, .jpeg, .gif"
                    name="image_uploads"
                    onChange={getImage}
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2  ">
                  <label htmlFor="title" className="text-lg font-semibold ">
                    Course Title <sup className="text-red-600">*</sup>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={userInput.title}
                    placeholder="Enter course title"
                    onChange={handlUserInput}
                    className="bg-gray-700 px-2 py-1 rounded-sm border border-gray-800 "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1  ">
                  <label htmlFor="createdBy" className="text-lg font-semibold ">
                    created by
                    <sup className="text-red-600">*</sup>
                  </label>
                  <input
                    type="text"
                    id="createdBy"
                    name="createdBy"
                    value={userInput.createdBy}
                    placeholder="Enter course  instructor"
                    onChange={handlUserInput}
                    className="bg-gray-700 px-2 rounded-sm py-1 border border-gray-800 "
                  />
                </div>
                <div className="flex flex-col gap-1  ">
                  <label htmlFor="category" className="text-lg font-semibold ">
                    Course category
                    <sup className="text-red-600">*</sup>
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={userInput.category}
                    placeholder="Enter course  category"
                    onChange={handlUserInput}
                    className="bg-gray-700 rounded-sm px-2 py-1 border border-gray-800 "
                  />
                </div>
                <div className="flex flex-col gap-1  ">
                  <label
                    htmlFor="description"
                    className="text-lg font-semibold "
                  >
                    Course description
                    <sup className="text-red-600">*</sup>
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    value={userInput.description}
                    placeholder="Enter course  description"
                    onChange={handlUserInput}
                    className="bg-gray-700 rounded-sm px-2 py-1 border h-24 overflow-y-scroll border-gray-800 resize-none "
                  />
                </div>
              </div>
            </main>
            <button
              onClick={onFormSubmit}
              type="submit"
              className=" w-full py-2 rounded-sm bg-gray-600 hover:bg-slate-500 hover:scale-95 transition-all ease-in-out duration-300    "
            >
              {" "}
              Create Course{" "}
            </button>
          </form>
        </div>
      </HomeLayout>
    </div>
  );
}

export default CreateCourse;
