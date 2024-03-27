import React from 'react'
import ItemCard from '../../Components/ItemCard/ItemCard'
import { itemsList } from '../../Data/ItemsList'
import { useParams } from 'react-router-dom'

const Items = () => {
  const {id} = useParams();
  const products = itemsList[id - 1];


  return (
    <div className='px-32 py-10 bg-slate-50'>
      <div className='text-center text-3xl font-bold my-4'>{products.name}</div>
    <div className='flex flex-row items-center justify-between flex-wrap gap-7'>
        {products.items?.map((item,index)=>{
            return (
                <ItemCard articleNo={item.articleNo} articleName={item.articleName} articleImage={item.articleImage} articleBrand={item.articleBrand} articleDescription={item.articleDescription} articleQuantity={item.articleQuantity} key={index}/>
            )
        })}    
    </div>
    </div>
  )
}

export default Items