import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import '../styles/Home.module.css'


export default function index() {
  return (
    <>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
}
