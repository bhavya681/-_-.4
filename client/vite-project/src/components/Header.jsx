import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="shadow-xl rounded-lg p-2 flex justify-between items-center">
        <h1 className="text-2xl font-mono hover:animate-ping cursor-pointer">
          Bhavya
        </h1>
        <div className="flex justify-center space-x-4  p-3">
          <Link to={"/"}>
            <h1 className="text-2xl font-mono">Home</h1>
          </Link>

          {
          localStorage.getItem("auth-token") ? (
            <>
              <Link to={"/user-profile"}>
                <h1 className="text-2xl font-mono">Profile</h1>
              </Link>
              <Link to={"/login"}>
                <h1
                  className="text-2xl font-mono"
                  onClick={() => {
                    localStorage.clear("auth-token");
                  }}
                >
                  Logout
                </h1>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <h1 className="text-2xl font-mono">Login</h1>
              </Link>
              <Link to={"/signup"}>
                <h1 className="text-2xl font-mono">Signup</h1>
              </Link>
            </>
          )
          }
      

        </div>
      </div>
    </>
  );
};

export default Header;
