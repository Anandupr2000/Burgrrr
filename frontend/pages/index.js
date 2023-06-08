import Burgers from '../components/Burgers'
import Header from '../components/Header'
import CustomizeBurger from '../components/customizeBurger'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import '../styles/Home.module.css'
import { getUser } from './api/server'
import { useEffect } from 'react'
import { setUserState, getUserState } from '../states/user'

// home
export default function index() {
  useEffect(() => {
    getUser().then((res) => {
      setUserState(res)
      console.log("current user is ")
      console.log(getUserState())
    })
      .catch(err => {
        console.log("     Server not reachable     ")
      })
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <div className="body">
          <Burgers />
          <Menu />
          <CustomizeBurger />
        </div>
        <Footer />
      </div>
    </>
  )
}
