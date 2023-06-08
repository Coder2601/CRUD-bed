import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from "./Components/Menu"
import Nav from "./Components/Nav";
import Home from "./Components/Home";
// import Gallery from "./Components/GalleryContent/CarouselCollection"
import Contactus from "./Components/Contactus";
import Booking from "./Components/Shop/Booking";
import Login from "./Components/Shop/Login";
import DryCake from './Components/MenuContent/DryCake';
import Cart from './Components/Cart/Cart'
import CartContext from './Components/context/CartContext';
import Carousel from './Components/GalleryContent/Carousel';
import Footer from './Components/Footer';
import Reviews from './Components/Shop/Reviews';
import WhyChoose from './Components/WhyChoose';
import Checkout from './Components/Shop/Checkout';
import DemoAllGalleryContext from './Components/GalleryContent/DemoAllGalleryContext';
import OrderSummaryCart from './Components/Cart/OrderSummaryComponent';
import OrderSummaryComponent from './Components/Cart/OrderSummaryComponent';

function App() {
  return (
    <CartContext>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/gallery' element={<DemoAllGalleryContext />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
      
      {/* <OrderSummaryCart /> */}
    </CartContext>
   


  );
}

export default App;

{/* 
// cd backend
// npm init -y
// npm i nodemon express mongoose cors dotenv

//to run-> npm start -------if not working--------> nodemon index.js */}