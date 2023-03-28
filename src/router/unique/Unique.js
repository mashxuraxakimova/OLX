import React from 'react'
import { useParams } from 'react-router-dom'
import { Another } from '../../static';
import "./Unique.css"

function Product() {
    const params = useParams()
    const oneItem = Another?.find(item => item.id === params.id)
    console.log(oneItem);
  return (
    <div className="product_s">
      <img className='ph' src={oneItem?.url} alt="" />
      <h2 className='title'>{oneItem?.title}</h2>
    </div>
  )
}

export default Product

