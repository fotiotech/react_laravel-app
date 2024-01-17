import React from "react";

const Products = () => {
    return (
        <div className="p-5">
            <h2 className=" text-2xl font-bold">Products</h2>
            <ul className="flex mt-5">
                <li className="px-5">Overview</li>
                <li className="px-5">Products</li>
                <li className="px-5">Totals Sells</li>
                <li className="px-5">Purchases</li>
            </ul>
        </div>
    );
};

export default Products;
