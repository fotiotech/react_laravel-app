
import React from "react";

const Dashbord = () => {
    return (
        <div className="p-5 ">
            <h2 className=" text-2xl font-bold p-2">Dashbord</h2>
            <div className="flex p-2">
                <div className=" flex justify-center items-center w-56 h-56 rounded-[50px] bg-slate-100">
                    <div className=" flex justify-center items-center w-44 h-44 bg-red-400 rounded-full">
                    <div className=" flex justify-center items-center w-32 h-32 bg-slate-100 rounded-full">
                        <p className="text-lg font-semibold">80%</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;
