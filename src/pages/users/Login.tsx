import { Link, Navigate } from "react-router-dom";
import Header from "../Header";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postdata, setpostdata] = useState("");

  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchdata = async () => {
      const url = "/login";
      const options: any = {
        method: "POST",

        body: postdata,
      };

      try {
        const response = await fetch(url, options);
        setUser(response);
        const result = await response.json();
        console.log(result);
        alert("Login successful");
        setRedirect(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  if (redirect) {
    return <Link to={"/profile"} />;
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center max-sm:relative bg-slate-100 w-full h-[620px]">
        <div className="w-96 bg-white rounded-2xl max-sm:rounded-none border-slate-700 p-8 border max-sm:absolute max-sm:top-1 max-sm:border-0">
          <h1 className="mt-4 text-2xl font-bold">Login</h1>
          <form className=" mt-8">
            <label className="font-medium">Email :</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              title="name"
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
              onSubmit={() => {
                setpostdata(email);
                setpostdata(password);
                <Link to={"/profile"} />;
              }}
              title="submit"
              type="submit"
              value="Submit"
              className="block w-full font-medium text-white rounded-full text-center p-1 bg-slate-700 my-3"
            >
              Submit
            </button>
          </form>
          <p>
            Do not have an Account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
