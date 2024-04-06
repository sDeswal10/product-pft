import React, { useEffect, useState } from 'react'
import {Link, useParams } from "react-router-dom";
import { supabase } from '../../Client/Client';


const Result = () => {
  const [data, setData] = useState([]);
  const {userEmail} = useParams()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('score_table')
        .select('*')
        .eq('user_email', userEmail);
      if (error) {
        throw error;
      }
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  console.log(data);
  return (
    <div className='w-full md:min-h-72 flex flex-col items-center justify-center bg-slate-50'>
      {data.map((item, i)=>(
        <div key={i} className='flex items-center gap-4'>
          <Link to={`/result/${item.user_email}/${item.quiz_name}`}>
            <button type="button" className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>{item.quiz_name}</button>
          </Link>
          <p>{new Date(item.created_at).toDateString()}</p>
          
        </div>
      ))}
    </div>
  )
}

export default Result