import '../styles/Home.module.css'
import Header from "../components/Header"
import Footer from "../components/Footer"

import LoginForm from '../components/LoginForm';

export default function login() {

    return <div className="App">
        <Header />
        <div className="loginBody">
            <div className="loginLeft"></div>
            <div className='loginRight'>
                <LoginForm />
            </div>
        </div>
        <Footer />
        {/* bootstrap */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossOrigin="anonymous"></script>
    </div>
}