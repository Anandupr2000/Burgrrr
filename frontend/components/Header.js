import React from 'react'
import { addToCart } from '../pages/api/server'
function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <h1 className="title">Bur<span className="highlights">grrr</span></h1>
                <span>delicious food</span>
            </div>
            <div className="options">
                <a href='/'>Home</a>
                <a href='/cart' onClick={addToCart}>Cart</a>
                <a href='/login'>Login</a>
            </div>
        </div>
    )
}

export default Header