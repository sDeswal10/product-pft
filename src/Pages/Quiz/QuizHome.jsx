import React, { useState } from 'react'
import { quizzes } from '../../Data/Quiz'
import { Link } from 'react-router-dom'

const QuizHome = () => {
  
  return (
    <div className='flex items-center justify-center mt-20'>
        <div className='w-1/3 min:h-1/3 border flex flex-wrap items-center p-4 justify-center border-gray-400'>
          {quizzes.map((quiz, i)=>{
            return (
              <Link to={`/test/${i}`} key={i}>
                <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' key={i}>
                {quiz.title}
              </button>
              </Link>
            )
          })}
        </div>
    </div>
  )
}

export default QuizHome