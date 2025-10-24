import React from 'react';


function Fooder() {
    return(
         <footer>
        <div className="content8">
          <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859439/wood_black_h4q2rx.jpg" className="blackwood" />
          <div className="lastpage">
            <a href="#"><img src="./Images/logo.png.webp" className="logo1" /></a>
            <nav className="foodertable">
              <div className="foodertable1">
                <h1 className="fooderhead1">Navigation</h1>
                <ul>
                  <a href="#" className="fooderlink">
                    <li className="foodline">Home</li>
                    <li className="foodline">Events</li>
                    <li className="foodline">Testimonial</li>
                    <li className="foodline">Categories</li>
                    <li className="foodline">Contacts</li>
                  </a>
                </ul>
              </div>
              <div className="foodertable2">
                <h1 className="fooderhead2">Useful Links</h1>
                <ul>
                  <a href="#" className="fooderlink">
                    <li className="foodline">Registration</li>
                    <li className="foodline">Login</li>
                    <li className="foodline">Policy</li>
                    <li className="foodline">Terms & Conditions</li>
                  </a>
                </ul>
              </div>
              <div className="foodertable3">
                <h1 className="fooderhead3">Instagram Feed</h1>
                <a href="#">
                  <nav className="imagetable">
                    <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859430/blackfood1_tsgyzf.webp" className="blackfoodi" />
                    <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859430/blackfood2_mr1fzw.webp" className="blackfoodi" />
                    <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859430/blackfood3_iscr6d.webp" className="blackfoodi" />
                    <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859433/blackfood4_kbnars.webp" className="blackfoodi" />
                    <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859431/blackfood5_vvnewe.webp" className="blackfoodi" />
                    <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859431/blackfood6_y0pjtm.jpg" className="blackfoodi" />
                  </nav>
                </a>
              </div>
            </nav>
            <div className="lastpage1">
              <p className="endline">Copyright ©2025 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <a href="#" className="lasta">Colorlib</a></p>
              <nav className="lastnav">
                <h1>Follow Us</h1>
                <div className="lastd"></div>
                <a href="#"><i className="fa-brands fa-twitter lasti"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f lasti"></i></a>
                <a href="#"><i className="fa-brands fa-internet-explorer lasti"></i></a>
                <a href="#"><i className="fa-brands fa-instagram lasti"></i></a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    );
}
  export default Fooder;