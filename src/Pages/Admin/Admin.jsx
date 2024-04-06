import { Link } from "react-router-dom";
import { supabase } from "../../Client/Client";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    try {
      let { data, error } = await supabase.from("score_table").select("*");

      if (error) throw error;
      if (data != null) {
        setResults(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-32">
        <span className="text-xl font-semibold text-gray-500">Click user to view score</span>
      <div className=" flex flex-col items-center justify-center md:w-64 md:min-h-64 border border-gray-200 rounded-lg">
        {results.map((result,i)=>(
          <Link to={`/result/${result.user_email}`}>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{result?.user_email}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Admin;
