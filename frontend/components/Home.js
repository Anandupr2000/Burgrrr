import React from 'react'
import Burgers from './Burgers'
import CustomizeBurger from './customizeBurger'
import Menu from './Menu'

function Home() {
  return (
    <div>
      <Burgers />
      <Menu />
      <CustomizeBurger/>
    </div>
  )
}

export default Home