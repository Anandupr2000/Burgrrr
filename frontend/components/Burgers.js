import React from 'react'
import Image from 'next/image'
import burgerImage from '../images/burger_vertical.jpg'
// import '../styles/burgers.css'
function Burgers() {
    return (
        <div className='burgerImages'>
            <div className='left-Panel'>
                <span className="heading">Pure Exotic Taste </span>
                <span className='description'>
                    Our mission is to serve a fresh, flavorful, flat patty burger made from the finest American beef, while becoming a real part of every neighborhood in which we open.
                </span>
                <a href='#Menu' className='btn btn-warning w-50'>Explore Menu</a>
            </div>
            <div>
                {/* <img src='images/burger_vertical.jpg' alt="" /> */}
                <Image src={burgerImage} alt=" burger image" priority={false}/>
                <div className="dummyImage"></div>
            </div>
        </div>
    )
}

export default Burgers