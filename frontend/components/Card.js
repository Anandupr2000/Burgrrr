import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function Card({ burger }) {
  let base = burger.varients[0]
  let prices = burger.prices
  return (
    <div className="cardItem" style={{}}>
      <img src={burger.image} className="card-img-top" alt="..." />
      <div className="card-body">

        <h5 className="card-title">
          <span style={{ float: "right" }}>
          </span>
        </h5>
        <p className="card-heading">{burger.name}</p>
        <p className="card-description">{burger.description}</p>
        {/* <span className='item-varient'>
          <p>Varients : </p>
          <select className='form-select' name="" id="">
            {
              burger.varients.map(element => (
                // console.log(element)
                <option value={element}>{element}</option>
              ))
            }
          </select>
        </span> */}
        <p className='cardItemPriceTag'>Price :
          <span className='cardItemPrice'>
            <i className="fas fa-rupee-sign"></i> {prices[0][base]}
          </span>
          ({base})
        </p>
        <div className="cardActions">
          <a href="#" className="btn btn-warning">Buy Now</a>

          <button className="btn text-secondary cardCartBtn">Add to Cart</button>
        </div>
      </div>
    </div>
    // }
    // <div >
    //   <div className="container mt-5 ms-5">
    //     <div className="row">
    //       {/* {{ #each products }} */}
    //       <div className="col-md-3 mb-5" style={{ marginTop:"1rem"}}>

    //       </div>
    //     </div>
    //     {/* {burgers.length > 0 && <img src={burgers[0].image} alt="" srcSet="" />} */}
    //   </div>
    // </div >
  )
}

export default Card