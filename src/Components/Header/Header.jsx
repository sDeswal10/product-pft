import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let data = JSON.parse(localStorage.getItem("token"));
      setUser(data);
      setLoggedIn(true);
    }
  }, [loggedIn]);

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(false);
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between h-20 bg-slate-400 px-4">
      <Link to="/">
        <span className=" text-white font-bold text-3xl">{`PFT (Product List)`}</span>
      </Link>
      <span>
        {loggedIn ? (
          <>
          {user.user.email === "admin@pft.com" ? <Link to="/admin">{user.user.email}</Link> : <Link to="/quiz">{user.user.email}</Link>}    
            <span className="mx-2 cursor-pointer font-semibold" onClick={logoutUser}>Logout</span>
          </>
        ) : (
          <Link
            to="/login"
            className="text-gray-800 font-semibold cursor-pointer"
          >
            Login
          </Link>
        )}
      </span>
    </div>
  );
};

export default Header;
