import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-between h-20 bg-slate-400 px-4'>
    <Link to="/">
        <span className=' text-white font-bold text-3xl'>{`PFT (Product List)`}</span>
    </Link>
    <Link to="/quiz">
      <span className='text-gray-800 font-semibold'>Quiz</span>
    </Link>
    </div>
  )
}

export default Header