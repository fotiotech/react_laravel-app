import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "../Header";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .post("/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function SignUpValidation() {
    if (!name || !email || !password) {
      alert("too bad validation");
      return false;
    } else {
      <Navigate to={"/profile"} />;
    }
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center bg-slate-100 max-sm:relative  w-full h-[620px]">
        <div className="w-96 bg-white rounded-2xl max-sm:rounded-none p-8 border border-slate-700 max-sm:absolute max-sm:top-1 max-sm:border-0 ">
          <h1 className="mt-4 text-2xl font-bold">Sign Up</h1>
          <form onSubmit={SignUpValidation} className=" mt-8">
            <label className="font-medium">Name :</label>
            <input
              onChange={(e) => setName(e.target.value)}
              title="name"
              type="text"
              className="block bg-slate-100 my-3  px-3 border rounded-full border-slate-700 p-1 w-full"
            />
            <label className="font-medium">Email :</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              title="email"
              type="text"
              className="block bg-slate-100 my-3  px-3 border rounded-full border-slate-700 p-1 w-full"
            />
            <label className="font-medium">Password :</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              title="password"
              type="password"
              className="block bg-slate-100 my-3 px-3 rounded-full p-1 border border-slate-700 w-full"
            />
            <p>Forget Password?</p>
            <button
              value="Submit"
              className="block w-full font-medium text-white rounded-full text-center p-1 bg-slate-700 my-3"
            >
              Submit
            </button>
          </form>
          <p>
            Already have an Account?
            <Link to={"/login"}>Log In</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
