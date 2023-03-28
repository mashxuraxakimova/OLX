import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static';

import "./UniquePage.css"

function UniquePage() {
    const params = useParams()
    const oneItem = PRODUCTS?.find(item => item.id === params.id)
    console.log(oneItem);
  return (
    <>
    <div className='u'>
        <h2 color='red' className='ut' style={{fontSize:"20px", color: "white"}}>Our Collections</h2>
        <img className='ui' src={oneItem?.url} height={290} width={335} alt="" />
        <img className='ui' src={oneItem?.url} height={290} width={335} alt="" />
        <img className='ui' src={oneItem?.url} height={290} width={335} alt="" />
        <img className='ui' src={oneItem?.url} height={290} width={335} alt="" />
        <h2 className='ut' style={{fontSize:"20px", color: "white"}}  >{oneItem?.title}</h2>
    </div>
    </>
  )
}

export default UniquePage


