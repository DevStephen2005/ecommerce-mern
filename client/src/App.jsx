import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import ShopPage from './pages/ShopPage';

function App() {

  return (
    <BrowserRouter>
    <ToastContainer position='top-center' toastStyle={{ 
          backgroundColor: '#000', // Black background
          color: '#fff', // White text
    }} />

    <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/register' element={<Signup />} ></Route>

        <Route path='/shop' element={<ShopPage />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<ContactPage />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/checkout' element={<Checkout />} ></Route>
        <Route path='/orderSuccess' element={<OrderSuccess />} ></Route>


      </Routes>
      <Footer />
      
    </BrowserRouter>
  )
}

export default App
