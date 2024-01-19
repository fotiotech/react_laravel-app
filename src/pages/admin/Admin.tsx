// import { Link } from "react-router-dom";
import Header from "../Header";
import Products from "./Products";
import Dashbord from "./Dashbord";
import Command from "./Command";
import { useCallback, useState } from "react";
import React from "react";

const Admin = () => {
  var [showComponent, setShowComponent] = useState(<Dashbord />);


  return (
    <div className="">
      <Header />
      <div className="flex px-20 w-full max-sm:w-full relative max-sm:px-1 h-full overflow-hidden max-sm:overflow-x-clip bg-slate-100">
        <div className="w-[20%] py-3 border h-[620px] max-sm:absolute max-sm:-ml-12 overflow-auto scrollbar scrollbar-thin scrollbar-track-red-500  bg-white">
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Products />)}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Command />)}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
        </div>
        <div className="w-[60%] h-full max-sm:w-full bg-white border">{showComponent}</div>
        <div className="w-[20%] max-sm:absolute max-sm:ml-96">
          <form>
            <input title="input" type="text" className="w-full h-20 rounded-3xl border" />
            <button title="button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
