import React, { useState } from "react";
import { supabase } from "../../Client/Client";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      setToken(data);
      if(data.user.email === "admin@pft.com" ? navigate("/admin") : navigate("/quiz"));
      

    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flex justify-center mt-32">
      <div className="w-80 border border-gray-300 rounded-lg p-5 flex flex-col justify-center gap-4">
        <h2 className="text-center font-semibold text-xl">PFT Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4"
            onChange={(e)=>setFormData({email: e.target.value, password: formData.password})}
          />
          <input
            type="text"
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4"
            onChange={(e)=>setFormData({email: formData.email, password: e.target.value})}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
