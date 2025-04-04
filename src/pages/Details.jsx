import React from "react";
import { Link, Outlet } from "react-router-dom";
import PathUtils from "./PathUtils";

const Details = () => {
  return (
    <div className="mt-20 p-5 gap-2.5">
      <div className="bg-white shadow-lg rounded-lg p-3 ">
       <Link to={PathUtils.PROFILE} className="text-red-500 hover:underline p-2">
          <span className="text-1xl font-bold">Profile</span>
        </Link>
        <Link to={PathUtils.ORDERS} className="text-red-500 hover:underline p-2">
          <span className="text-1xl font-bold">Orders</span>
        </Link>
       
        <Link to={PathUtils.LOGOUT} className="text-red-500 hover:underline p-2">
          <span className="text-1xl font-bold">Logout</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Details;
