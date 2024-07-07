import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import toast from "react-hot-toast";
import {
  getUserProfile,
  updateUserProfile,
} from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth?.data);

  const dispatch = useDispatch();
  const [user, setuser] = useState({
    fullName: userData.fullName,
  });
  const handleInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  // update user profile
  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!user.fullName) {
      toast.error("Please enter your full name");
      return;
    }
    if (user.fullName?.trim() === "") {
      toast.error("Full name should not be empty");
      return;
    }
    const res = await dispatch(updateUserProfile(user));
    if (res.payload?.status === true) {
      await dispatch(getUserProfile());
      navigate("/");
    }
  };
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <form
          noValidate
          action=""
          onSubmit={onFormSubmit}
          className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-lg"
        >
          <h1 className="text-center text-2xl font-semibold ">Edit Profile</h1>
          <label htmlFor="fullName">
            Full Name
            <input
              type="text"
              required
              name="fullName"
              placeholder="Enter Full Name"
              value={user.fullName}
              onChange={handleInputChange}
              className="mt-2 w-full  px-2 py-1  "
            />
          </label>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Update Profile
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default EditProfile;
