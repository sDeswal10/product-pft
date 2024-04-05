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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Employee Mail
            </th>
            <th scope="col" className="px-6 py-3">
              Quiz Name
            </th>
            <th scope="col" className="px-6 py-3">
              Quiz Score
            </th>
            <th scope="col" className="px-6 py-3">
              Questions
            </th>
            <th scope="col" className="px-6 py-3">
              User Answer
            </th>
            <th scope="col" className="px-6 py-3">
              Correct Answer
            </th>
          </tr>
        </thead>
        <tbody>
          {results?.map((result, i)=>(
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={i}>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {result.user_email}
            </th>
            <td className="px-6 py-4">{result.quiz_name}</td>
            <td className="px-6 py-4">{result.quiz_score}</td>
            <td className="px-6 py-4">
                <ul>
                  {result?.user_responses?.map((response, j) => (
                    <li key={j}>{response}</li>
                  ))}
                </ul>
              </td>            
              <td className="px-6 py-4">
                <ul>
                  {result?.user_responses?.map((response, j) => (
                    <li key={j}>{response}</li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4">
                <ul>
                  {result?.user_responses?.map((response, j) => (
                    <li key={j}>{response}</li>
                  ))}
                </ul>
              </td>                     
          </tr>
          ))}
          
        </tbody>
      </table>     
    </div>
  );
};

export default Admin;
