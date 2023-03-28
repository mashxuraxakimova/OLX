import React from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from "../../static"
import { Another } from '../../static';

function Home() {
  document.title = "Sahifamizga hush kelibsiz"
  return (
    <>
      <div className="wrapper">
        {
          PRODUCTS?.map((e, inx) => (<div key={inx} className="card">
            <Link to={`/product/${e.id}`}>
              <img src={e.url} alt="" />
            </Link>
            <h3 style={{fontSize: "14px", marginLeft:"20px"}}>{e.title}</h3>
            <h3 style={{fontSize: "14px", marginLeft:"20px"}}>{e.price}USD</h3>
            <div className="card"></div>
          </div>
          
          ))
        }
      </div>

      <div className="wrapper2">
        {
          Another?.map((e, inx) => (<div key={inx} className="cardm">
            <Link to={`/products/${e.id}`}>
              <img src={e.url} alt="" />
            </Link>
            <h3 style={{fontSize: "15px", marginLeft:"20px"}}>{e.title}</h3>
            <h3 style={{fontSize: "15px", marginLeft:"20px"}}>{e.price}USD</h3>
          </div>
          
          ))
        }
      </div>

    </>
  )
}

export default Home