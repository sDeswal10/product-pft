import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { supabase } from "../../Client/Client";

const UserResponses = () => {
  const [data, setData] = useState([]);
  const {userEmail,quizNo} = useParams(); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("score_table")
        .select("*")
        .eq('user_email', userEmail);
      if (error) {
        throw error;
      }
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  //   console.log(JSON.parse(data[0]));
  return (
    <div className="m-4">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Question
              </th>
              <th scope="col" class="px-6 py-3">
                User Response
              </th>
              <th scope="col" class="px-6 py-3">
                Correct Answer
              </th>
            </tr>
          </thead>
            <tbody>
          {data.map((object, i) => (
            <>
              {object.user_responses.map((nestedObject, j) => {
                const parsedNestedObject = JSON.parse(nestedObject);
                const isCorrect = parsedNestedObject.userAnswer === parsedNestedObject.correctAnswer;
                return (
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={j}>
                  {JSON.parse(nestedObject).question}
                  <th
                    scope="row"
                    class={`px-6 py-4 font-medium ${isCorrect ? "bg-green-500" : "bg-red-500"} text-gray-900 whitespace-nowrap text-center`}
                  >
                    {JSON.parse(nestedObject).userAnswer}
                  </th>
                  <td class="px-6 py-4 text-center">
                    {JSON.parse(nestedObject).correctAnswer}
                  </td>
                </tr>
                )
              })}</>
            ))}
              </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserResponses;
