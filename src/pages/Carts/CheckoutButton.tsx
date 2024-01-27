
import React from "react";
import { Link } from "react-router-dom";

const CheckoutButton = () => {
  return (
    <div>
      <Link  to={'/checkout'}>
      <button className="p-1 mx-3 px-4 rounded-full bg-[#00002a] text-white">
        Checkout
      </button>
      </Link>
      
    </div>
  );
};

export default CheckoutButton;
