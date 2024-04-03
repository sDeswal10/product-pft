import React, { useEffect, useRef, useState } from "react";
import { quizzes } from "../../Data/Quiz";
import "./quiz.css";
import { useParams } from "react-router-dom";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let {quizNo} = useParams();
  let [quizNumber, setQuizNumber] = useState(quizzes[quizNo])
  let [question, setQuestion] = useState(quizNumber.questions[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);


  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  let option_array = [Option1, Option2, Option3, Option4];

  const randomNumber = (r,o)=>{
    let arr = []
  for (let i = 1; i <= r; i++) {
    arr.push(i)
  }
  let result = [];
  for (let i = 1; i <= o; i++) {
    const random = Math.floor(Math.random() * (r - i));
    result.push(arr[random]);
    arr[random] = arr[r - i];
  }

  return result;
  }
  console.log(randomNumber(8,1))
  // setIndex(randomNumber(8,1))
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };


  const nextQue = () => {
    if (lock === true) {
      if (index === quizzes[quizNo].questions.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(quizzes[quizNo].questions[index]);

      setLock(false);
      option_array?.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };

  return (
    <div className="quiz">
      <div className="w-[640px] m-auto mt-[50px] border border-black text-[#262626] flex flex-col gap-5 rounded px-[40px] py-[50px]">
        <h2 className="text-center font-bold text-xl">Your Quiz</h2>
        <hr className="h-1 border-none bg-[#707070]" />
        {result ? (
          <>
            <h2>You Scored {score} out of {quizzes[quizNo].questions.length}</h2>
        <button className="btn mx-auto w-64 h-14 bg-[#553f9a] text-white text-2xl font-semibold rounded-lg cursor-pointer">Submit</button>
          </>
        ) : (
          <>
            <h2>
              {index + 1}. {question?.question}
            </h2>
            <ul>
              <li
                ref={Option1}
                className="flex items-center h-16 ps-[15px] border border-solid rounded-lg mb-5 text-xl cursor-pointer"
                onClick={(e) => {
                  checkAns(e, 1);
                }}
              >
                {question?.options1}
              </li>
              <li
                ref={Option2}
                className="flex items-center h-16 ps-[15px] border border-solid rounded-lg mb-5 text-xl cursor-pointer"
                onClick={(e) => {
                  checkAns(e, 2);
                }}
              >
                {question?.options2}
              </li>
              <li
                ref={Option3}
                className="flex items-center h-16 ps-[15px] border border-solid rounded-lg mb-5 text-xl cursor-pointer"
                onClick={(e) => {
                  checkAns(e, 3);
                }}
              >
                {question?.options3}
              </li>
              <li
                ref={Option4}
                className="flex items-center h-16 ps-[15px] border border-solid rounded-lg mb-5 text-xl cursor-pointer"
                onClick={(e) => {
                  checkAns(e, 4);
                }}
              >
                {question?.options4}
              </li>
            </ul>
            <button
              className="btn mx-auto w-64 h-14 bg-[#553f9a] text-white text-2xl font-semibold rounded-lg cursor-pointer"
              onClick={nextQue}
            >
              Next
            </button>
            <div className="mx-auto text-xl">
              {index + 1} of {quizzes[quizNo]?.questions.length} questions
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
