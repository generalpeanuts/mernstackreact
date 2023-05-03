import logo from './logo.svg';
import './App.css';
import { FaPhone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <div className="top-black-bar">
        <div className="empty-for-inline">
          <span className="black-bar-offer">
            FREE SHIPPING ON ALL ORDERS ABOVE AED 150
          </span>
          <span className="black-bar-phone">
            <FaPhone /> +971 123 123456
          </span>
          <span className="black-bar-locations">
            <a className="link-bb" href="#">LOCATIONS</a>
          </span>
        </div>
      </div>

      <div className="navbarnicon">
        <Navbar />
      </div>
      <div className="navbarnicon">
        <button className="loginbtn">Login</button>
      </div>
      <div className="navbarreg">
        <a href="#" className="link-reg">Register</a>
      </div>
      <div className="navbari">
        <FaSearch />
      </div>
      <div className="navbari">
        <FaUser />
      </div>
      <div className="navbari">
        <FaHeart />
      </div>
      <div className="navbari">
        <FaRegClipboard />
      </div>

      <br /><br /><br /><br /><br /><br /><br />

      <div className="featured1">
        <div className="textline1-1">
          Unbelievable low prices
        </div>
        <div className="textline2-1">
          GLASSES FOR
        </div>
        <div className="textline3-1">
          MEN & WOMEN
        </div>
        <button className="buynowbtn">Shop Now</button>
      </div>

<br /><br /><br /><br />

      <div className="featured2">
        <div className="textline1-2">
        WHAT WE’RE ABOUT
        </div>
        <div className="textline2-2">
        SEE THE WORLD DIFFRENTLY
        </div>
        <div className="textline3-2">
        We make everyday life look and feel ten times better. How? 
        Click on the links below to see for yourself.
        </div>
        <button className="buynowbtn">Buy Now</button>
        <br /><br /><br /><br />
      </div>
      <br /><br />
      <div className="featuredbuys">
        <div className="producttitle">PRODUCTS</div>
        <br /><br /><br /><br />
        <div className="productdiv">
        <div className="product">
            <div className="image">
              <img src="glasses.jpg" height="100px" width="100px"/>
            </div>
            <div className="btnp">
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="glasses.jpg" height="100px" width="100px"/>
            </div>
            <div className="btnp">
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="glasses.jpg" height="100px" width="100px"/>
            </div>
            <div className="btnp">
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="glasses.jpg" height="100px" width="100px"/>
            </div>
            <div className="btnp">
              <button className="buynowbtn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="page-btm">
        <div className="contact-us-text">
          <b>CONTACT US</b>
          <br/><br/>
          United Arab Emirates
          <br/>
          +971 2569 78956,
          <br/>
          +971 6985 69846
          <br/>
          <a href="info@eyenation.com" className="page-btm-link">info@eyenation.com</a>
        </div>
        <div className="my-account-text">
          <b>MY ACCOUNT</b>
          <br/><br/>
          <a className="page-btm-link" href="#">The board</a>
          <br/>
          <a className="page-btm-link" href="#">Accessories</a>
          <br/>
          <a className="page-btm-link" href="#">FAQs</a>
          <br/>
          <a className="page-btm-link" href="#">Terms & Conditions</a>
        </div>
        <div className="sign-up-newsletter">
          <b>SIGN UP TO OUR NEWSLETTER</b>
          <br/><br/>
          <input className="textbox-email" type="text"></input>
        </div>

        <hr></hr>

        <div className="help-text">
          <b>HELP & SUPPORT</b>
          <br/><br/>
          <a className="page-btm-link" href="#">FAQ</a>
          <br/>
          <a className="page-btm-link" href="#">Contact Us</a>
          <br/>
          <a className="page-btm-link" href="#">Returns</a>
          <br/>
          <a className="page-btm-link" href="#">Orders</a>
        </div>
        <div className="shopping-text">
          <b>SHOPPING</b>
          <br/><br/>
          <a className="page-btm-link" href="#">Sunglasses</a>
          <br/>
          <a className="page-btm-link" href="#">Eyeglasses</a>
          <br/>
          <a className="page-btm-link" href="#">Contact Lenses</a>
          <br/>
          <a className="page-btm-link" href="#">Accessories</a>
        </div>
        <div className="info-text">
          <b>INFORMATION</b>
          <br/><br/>
          <a className="page-btm-link" href="#">Store locator</a>
          <br/>
          <a className="page-btm-link" href="#">About Us</a>
          <br/>
          <a className="page-btm-link" href="#">Careers</a>
          <br/>
          <a className="page-btm-link" href="#">Information</a>
        </div>
        <div className="services-text">
          <b>SERVICES</b>
          <br/><br/>
          <a className="page-btm-link" href="#">Frame size</a>
          <br/>
          <a className="page-btm-link" href="#">Buying Guide</a>
          <br/>
          <a className="page-btm-link" href="#">Eye Nation Group</a>
          <br/>
          <a className="page-btm-link" href="#">Virtual Try On</a>
        </div>
      </div>


    </div>
  );
}

export default App;
