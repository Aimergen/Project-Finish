import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  // const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const status = 201;
    axios
      .post(process.env.REACT_APP_API_URL + "/signin", user)
      .then((res) => {
        window.location.href = "/";
        if (status === res.status) {
          console.log("status", res);
          localStorage.setItem("token", res.data[0]);
          toast.success("амжилттай нэвтэрлээ");
          axios
            .get(process.env.REACT_APP_API_URL + "/currentUser", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              console.log("user-iig set hiilee..", res.data);
            })
            .catch((e) => {
              console.error(e);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("холболт буруу байна");
      });
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src={"/login.png"}
            alt="login"
          />
        </div>

        <div className="bg-gray-50 flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 px-8"
            onSubmit={handleSubmit}
          >
            <h2 className="text-4xl text-slate-700 font-bold text-center">
              HI ADMIN
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>email</label>
              <input
                onChange={(e) => handleChange(e)}
                name="email"
                className="rounded-lg bg-gray-50 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none"
                type="text"
                placeholder="example@mail.com"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                onChange={(e) => handleChange(e)}
                name="password"
                className="rounded-lg bg-gray-50 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>
            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-slate-900 font-semibold rounded-lg">
              SIGN IN
            </button>

            <button className="w-full cursor-pointer my-5">
              <div className="flex items-center justify-center bg-white p-3 rounded-lg">
                <div>
                  <FcGoogle />
                </div>
                <p className="text-black pl-4 font-bold">Google</p>
              </div>
            </button>

            <button className="w-full cursor-pointer mb-3">
              <div className=" flex items-center justify-center bg-white p-3 rounded-lg">
                <div>
                  <BsFacebook className=" text-blue-600" />
                </div>
                <p className="text-black pl-4 font-bold">Facebook</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
