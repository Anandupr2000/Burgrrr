import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getAllBurgers } from '../pages/api/server'

// import '../styles/menu.css'
function Menu() {
    const [burgers, setBurgers] = useState([]);
    useEffect(() => {
        getAllBurgers()
            .then(
                res => {
                    setBurgers(res)
                    console.log("promise fullfilled")
                })
    }, [])

    useEffect(() => {
        console.log(burgers)
    }, [burgers]);
    return (
        <div id='Menu'>
            <span>
                <span className='heading'>Our Menu</span>
            </span>
            <div className='menuItems' style={{ marginTop: "1rem" }}>
                <div className="container">
                    <div className="row justify-content-md-center">
                        {
                            burgers.length > 0 ? (burgers.map((burger, index) => (
                                <div key={index} className="col mt-5">
                                    <Card burger={burger} />
                                </div>)
                            ))
                                :
                                <h2>Loading....</h2>
                        }
                    </div>
                    {/* {burgers.length > 0 && <img src={burgers[0].image} alt="" srcSet="" />} */}
                </div>
            </div>
        </div>
    )
}

export default Menu