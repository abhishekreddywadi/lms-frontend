import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";

function Profile() {
  const userData = useSelector((state) => state.auth?.data);

  return (
    <HomeLayout>
      <div className="min-h-[90vh]  flex items-center justify-center ">
        <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-[50%] shadow-lg ">
          <img
            src={userData?.avatar?.secure_url}
            alt=""
            className="w-40 m-auto rounded-full border border-black "
          />
          <h3 className="text-xl font-semibold text-center capitalize">
            {userData?.fullName}
          </h3>
          <div className="grid grid-cols-2  ">
            <p>Email :</p>
            <p className="grid justify-self-start">{userData?.email}</p>
          </div>
          <div className="grid grid-cols-2">
            <p>Role :</p>
            <p>{userData?.role}</p>
          </div>
          <div className="grid grid-cols-2">
            <p>Subscription :</p>
            <p>
              {userData?.subscription?.status === "active"
                ? "Active"
                : "Inactive"}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2 ">
            <Link
              to={"/changepassword"}
              className="w-1/2 bg-gray-600 hover:bg-gray-500 rounded-sm py-1 px-2 transition-all ease-in-out duration-300 text-center "
            >
              {" "}
              Forgot Password
            </Link>
            <Link
              to={"/user/editprofile"}
              className="w-1/2 bg-gray-600 hover:bg-gray-500 rounded-sm py-1 px-2 transition-all ease-in-out duration-300 text-center "
            >
              Update Profile{" "}
            </Link>
          </div>
          {userData?.subscription?.status === "active" && (
            <button className="bg-red-600 hover:bg-red-500 rounded-sm py-1 px-2 transition-all ease-in-out duration-300 text-center">
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
    </HomeLayout>
  );
}

export default Profile;
