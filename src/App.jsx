import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <a href="#"><img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859434/logo.png_afbfif.webp" className="logo" /></a>
        <nav className="menu">
          <ul className="list">
            <li><a href="#" className="a1">Home</a></li>
            <li><a href="#" className="a1">About</a></li>
            <li><a href="#" className="a1">Menu</a></li>
            <li><a href="#" className="a1">Blog</a></li>
            <li><a href="#" className="a1">Contact</a></li>
          </ul>
          <a href="#"><button className="order">Order Online</button></a>
        </nav>
      </header>
      <section>
        <div className="posit">
          <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859430/allfood_x2usfk.jpg" className="allfood" />
          <div className="content">
            <p className="para">Discover your Taste</p>
            <h1 className="honest">We belive good food offer great smile</h1>
            <p className="empty">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam libero aliquid molestiae, molestias ducimus hic dolorem sed in praesentium enim.</p>
            <a href="#"><button className="Reservation">Reservation</button></a>
          </div>
          <div className="space"></div>
        </div>
      </section>
      <article>
        <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859434/Chef_z2oq04.webp" className="chef" />
        <div className="content1">
          <p className="para1">Discover Your Test</p>
          <h1 className="honest1">We Provide Good Food For Your Family!</h1>
          <p className="empty1">Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer.</p>
          <nav className="features">
            <i className="fa-regular fa-user"></i><div className="goods">Ut enim ad minim veniam, quis nostrud exer.</div>
            <i className="fa-solid fa-utensils"></i><div className="goods">Ut enim ad minim veniam, quis nostrud exer.</div>
            <i className="fa-regular fa-user"></i><div className="goods">Ut enim ad minim veniam, quis nostrud exer.</div>
            <i className="fa-regular fa-user"></i><div className="goods">Ut enim ad minim veniam, quis nostrud exer.</div>
          </nav>
        </div>
        <div className="content2">
          <p className="para2">Our Offerd Menu</p>
          <div className="urge"><h1 className="honest2">Some Trendy And Popular Courses Offerd</h1></div>
          <nav className="features1">
            <a href="#" className="a2">
              <div className="parent">
                <div className="time1">Special</div>
                <div className="time2"></div>
              </div>
            </a>
            <a href="#" className="a2"><div className="time">Lunch</div></a>
            <a href="#" className="a2"><div className="time">Breakfast</div></a>
            <a href="#" className="a2"><div className="time">Dinner</div></a>
          </nav>
          <nav className="fooditems">
            <div className="box5">
              <div className="menu2">
                <p className="dollar">$25</p>
                <h1 className="foodorder">Delicious Food</h1>
                <p className="p1">Ut enim ad minim veniam quis nostr.</p>
                <a href="#"><button className="ordern">Order Now</button></a>
              </div>
              <div className="items">
                <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859437/Sandwitch_tzslgw.avif" className="iimg" />
              </div>
            </div>
            <div className="box5">
              <div className="menu2">
                <p className="dollar">$25</p>
                <h1 className="foodorder">Delicious Food</h1>
                <p className="p1">Ut enim ad minim veniam quis nostr.</p>
                <a href="#"><button className="ordern">Order Now</button></a>
              </div>
              <div className="items">
                <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859436/Drinks_tbvjo5.avif" className="iimg" />
              </div>
            </div>
            <div className="box5">
              <div className="item">
                <div className="box4">
                  <div className="menu3">
                    <p className="dollar">$25</p>
                    <h1 className="foodorder">Delicious Food</h1>
                    <p className="p1">Ut enim ad minim veniam quis nostr.</p>
                    <a href="#"><button className="ordern">Order Now</button></a>
                  </div>
                  <div className="roast">
                    <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859433/Burger_ukompu.avif" className="iimg1" />
                  </div>
                </div>
                <div className="box4">
                  <div className="menu3">
                    <p className="dollar">$25</p>
                    <h1 className="foodorder">Delicious Food</h1>
                    <p className="p1">Ut enim ad minim veniam quis nostr.</p>
                    <a href="#"><button className="ordern">Order Now</button></a>
                  </div>
                  <div className="roast">
                    <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859434/Chips_qcuntg.avif" className="iimg2" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859431/foodreview_vakzxj.webp" className="foodr" />
        <div className="content3">
          <p className="para3">About Our Restaurant</p>
          <h1 className="honest2">We Provide Good Food For Your Family!</h1>
          <p className="empty2">Ut enim acgsd minim veniam...</p>
          <p className="empty3">There are many variations of passages of Lorem Ipsum...</p>
          <a href="#"><button className="learn">Learn More</button></a>
        </div>
        <div className="content4">
          <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859433/fruits_fnhmot.jpg" className="fruit" />
          <div className="schedule">
            <div className="imp">
              <p className="para4">About Our Restaurant</p>
              <h1 className="honest3">Book A Table</h1>
            </div>
          </div>
          <nav className="dateandtime">
            <select className="customer">
              <option>person</option>
              <option>person2</option>
              <option>person3</option>
              <option>person4</option>
            </select>
            <input type="date" className="dates" />
            <input type="time" className="times" />
            <a href="#"><button className="book">Book Now</button></a>
          </nav>
        </div>
        <div className="content5">
          <p className="para5">Servicees We Offer</p>
          <h1 className="honest4">Our Best Services</h1>
          <nav className="cards">
            <div className="card1">
              <i className="fa-solid fa-user-secret"></i>
              <a href="#" className="ca1">Best Chef</a>
              <p className="cp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem laboriosam cumque illo recusandae nihil veritatis ad quidem! Dignissimos voluptatibus amet exercitationem sunt distinctio? Minus.</p>
            </div>
            <div className="card2">
              <i className="fa-solid fa-bowl-food"></i>
              <a href="#" className="ca2">Quality Food</a>
              <p className="cp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem laboriosam cumque illo recusandae nihil veritatis ad quidem! Dignissimos voluptatibus amet exercitationem sunt distinctio? Minus.</p>
            </div>
            <div className="card3">
              <i className="fa-solid fa-user-secret"></i>
              <a href="#" className="ca3">Perfect Cook</a>
              <p className="cp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem laboriosam cumque illo recusandae nihil veritatis ad quidem! Dignissimos voluptatibus amet exercitationem sunt distinctio? Minus.</p>
            </div>
          </nav>
        </div>
        <div className="content6">
          <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859434/cherry_inggkp.avif" className="cherrys" />
          <div className="mailid">
            <p className="para6">About Our Restaurant</p>
            <h1 className="honest5">We Provide Good Food For Your Family!</h1>
            <p className="empty4">Ut enim acgsd minim veniam...</p>
            <div className="mailrelative">
              <input type="email" placeholder="Your Email" className="email" />
              <a href="#"><div className="sub">Subscribe</div></a>
            </div>
          </div>
        </div>
        <div className="content7">
          <p className="para7">Our New Blog News</p>
          <h1 className="honest6">Our Recnet News</h1>
          <nav className="lcards">
            <div className="lcard">
              <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859432/chef_image1_flilat.jpg" className="chefspecial" />
              <div id="specialcard">
                <p className="pspecial">23 Dec, 2020</p>
                <a href="#" className="aspecial">Addiction When Food Plate Becomes</a>
              </div>
            </div>
            <div className="lcard">
              <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859434/chef_image2_arybbl.webp" className="chefspecial" />
              <div id="specialcard">
                <p className="pspecial">23 Dec, 2020</p>
                <a href="#" className="aspecial">Addiction When Food Plate Becomes</a>
              </div>
            </div>
            <div className="lcard">
              <img src="https://res.cloudinary.com/do8qhus0b/image/upload/v1753859434/chef_image3_wh73u0.jpg" className="chefspecial" />
              <div id="specialcard">
                <p className="pspecial">23 Dec, 2020</p>
                <a href="#" className="aspecial">Addiction When Food Plate Becomes</a>
              </div>
            </div>
          </nav>
        </div>
      </article>
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
      <h1>Come to Again! welcome from jana</h1>
    </>
  );
}

export default App;
