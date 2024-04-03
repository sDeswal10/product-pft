import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      let data = JSON.parse(localStorage.getItem('token'))
      setLoggedIn(true);
      setUser(data);
    }    
  }, []);
  
  const logoutUser = ()=>{
    localStorage.removeItem("token");
    setUser(false);
    navigate("/");
  }

  return (
    <div className='flex items-center justify-between h-20 bg-slate-400 px-4'>
    <Link to="/">
        <span className=' text-white font-bold text-3xl'>{`PFT (Product List)`}</span>
    </Link>
    <span>
    
      <span className='text-gray-800 font-semibold mx-4'>{loggedIn ? user?.user?.email :<Link to="/login">Login</Link>}</span>
    {loggedIn ? <span onClick={logoutUser} className='text-gray-800 font-semibold cursor-pointer'>Logout</span> : ""}
    </span>
    
    </div>
  )
}

export default Header