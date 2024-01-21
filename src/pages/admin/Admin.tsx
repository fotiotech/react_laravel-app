import React from "react";
import Products from "./Products";
import Dashbord from "./Dashbord";
import Command from "./Command";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Close,
  Dashboard,
  Menu,
  ProductionQuantityLimits,
} from "@mui/icons-material";

const hidemenu1 = "max-sm:-left-96";
const unhidemenu = "max-sm:left-1";

const Admin = () => {
  var [showComponent, setShowComponent] = useState(<Dashbord />);
  const [meNu, setMeNu] = useState(hidemenu1);

  return (
    <div className="w-full">
      <div className="flex px-20 max-sm:px-1">
        <div
          onClick={() => setMeNu(unhidemenu)}
          className=" flex invisible max-sm:visible"
        >
          <span className="px-3">
            <Menu />
          </span>
        </div>
        <Link to={"/"}>
          <img title="logo" src="/public/logo.png" className=" max-sm:w-14" />
        </Link>
      </div>

      <div className="flex px-20 w-full max-sm:w-full relative max-sm:px-1 bg-slate-100">
        <div
          className={`w-[20%] max-sm:w-52 py-3 border h-[620px] transition-all duration-500 ease-in-out max-sm:h-auto max-sm:absolute ${meNu}  overflow-auto scrollbar scrollbar-thin scrollbar-track-red-500  bg-white`}
        >
          <div
            onClick={() => setMeNu(hidemenu1)}
            className=" invisible max-sm:visible ml-40"
          >
            <Close />
          </div>
          <div>
            <div>
              <h2 className="p-3 font-semibold">Menu</h2>
            </div>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-[#fafafa] font-semibold border"
            >
              <Dashboard />
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Products />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              <ProductionQuantityLimits />
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Command />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Orders
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Orders
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Orders
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Orders
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Orders
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={() => setShowComponent(<Dashbord />)}
              className="text-center flex justify-center items-center hover:bg-slate-100 font-semibold border"
            >
              Orders
            </h2>
          </div>
        </div>
        <div className="w-[80%] h-full max-sm:w-full bg-white border">
          {showComponent}
        </div>
      </div>
    </div>
  );
};

export default Admin;
