// import { Link } from "react-router-dom";
import Header from "../Header";
import Products from "./Products";
import Dashbord from "./Dashbord";
import Command from "./Command";
import { useCallback, useState } from "react";
import React from "react";

const Admin = () => {
  var [showComponent, setShowComponent] = useState<string>(" ");

  const ShowComponent1 = useCallback(() => {
    setShowComponent(<Dashbord />);
  }, []);

  const ShowComponent2 = useCallback(() => {
    setShowComponent(<Products />);
  }, []);

  const ShowComponent3 = useCallback(() => {
    setShowComponent(<Command />);
  }, []);

  return (
    <div className="">
      <Header />
      <div className="flex px-20 bg-slate-100">
        <div className="w-[20%] py-3 border bg-white">
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={ShowComponent1}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={ShowComponent2}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={ShowComponent3}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={ShowComponent1}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={ShowComponent2}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={ShowComponent3}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={ShowComponent1}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={ShowComponent2}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={ShowComponent3}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
          <div>
            <h2 className="p-3 font-semibold">Menu</h2>
            <h2
              onClick={ShowComponent1}
              className="text-center font-semibold border"
            >
              Dashboard
            </h2>

            <h2
              onClick={ShowComponent2}
              className="text-center font-semibold border"
            >
              Products
            </h2>

            <h2
              onClick={ShowComponent3}
              className="text-center font-semibold border"
            >
              Command
            </h2>
          </div>
        </div>
        <div className="w-[60%] h-full bg-white border">{showComponent}</div>
        <div className="w-[20%]">
          <form>
            <input type="text" className="w-full h-20 rounded-3xl border" />
            <button />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
