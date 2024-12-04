import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  return (
    <>
      <div className=" items-center justify-center h-screen flex  w-screen">
        <div  className=" border-[2px] shadow-md p-10 rounded-md" >
          <div className="">
            <form method="div">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              />
            </div>
            <div className="flex justify-between  mt-5">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have Acoount ?{" "}
                <button
                  to="/"
                  className="cursor-pointer underline text-blue-500"
                  onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                >
                  Login
                </button>{" "}
                <Login/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
