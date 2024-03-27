import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({title, totalProducts, image, id}) => {
  
  return (
    <Link to={`/product/${id}`}>
        <div className='flex flex-col border border-gray-300 shadow-md rounded p-2'>
            <div className='w-56 h-64'>
                <img src={image} alt='title' className='w-full h-full object-cover rounded'/>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold text-xl mt-3'>{title}</span>
                <span className='text-gray-600 py-3'>Total products available: {totalProducts}</span>
            </div>
        </div>    
    </Link>
  )
}

export default ProductCard