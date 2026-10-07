import "./App.css";

import img1 from "./assets/Frame 17.png";
import HeroImg from "./assets/Hero img.png";
import img2 from "./assets/Frame 18.png";
import G from "./assets/G.png";
import k from "./assets/k.png";
import img3 from "./assets/Image.png";
import imggg from "./assets/Image (1).png";
import video from "./assets/Video.png";

import Group87 from "./assets/Group 87.png";
import G1 from "./assets/G1.png";
import MaskGroup from "./assets/Mask Group.png";
import num1 from "./assets/num1.png";
import num2 from "./assets/num2.png";
import num3 from "./assets/num3.png";
import num5 from "./assets/num5.png";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import img11 from "./assets/imgs7.png";
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import twitter from "./assets/twitter.png"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <nav className="flex flex-row items-center justify-center gap-48">
          <h3 className="text-2xl font-bold text-white">Gerícht</h3>
          <ul className="flex flex-row gap-4 text-sm text-white">
            <li>Home</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Landing</li>
          </ul>

          <ul className="flex flex-row gap-8 text-white text-sm">
            <li>Log in / registration</li>
            <li> | </li>
            <li>book table</li>
          </ul>
        </nav>
        <div className="flex flex-row mt-10 gap-32 items-center justify-center ">
          <div className="flex flex-col justify-center items-start w-96">
            <p className="font-['Cormorant_Upright'] text-sm text-white">
              Chase the new Flavour
            </p>
            <img className="w-20 mt-2 " src={img1} alt="" />
            <h1 className="font-['Cormorant_Upright'] text-6xl lg:text-7xl font-bold text-amber-100 mt-4 ">
              The Key To
            </h1>

            <h1 className="font-['Cormorant_Upright'] text-6xl lg:text-7xl font-bold text-amber-100 ">
              Fine Dining
            </h1>
            <p className="text-amber-50 mt-4">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus{" "}
            </p>
            <button className="font-['Cormorant_Upright'] w-32 h-10 bg-amber-200 mt-8">
              Explore Menu
            </button>
          </div>

          <div>
            <img className="w-80 mt-10 h-96" src={HeroImg} alt="" />
          </div>
        </div>
        <p className="text-amber-100 text-sm mt-10">01 -- 02 03 04</p>
      </div>

      {/* section2 */}
      <div className="flex flex-row justify-center items-center mt-60 ml-14">
        <div className="flex flex-col justify-center items-end w-80 mb-80 relative left-28 ">
          <h2 className="font-['Cormorant_Upright'] text-amber-100 text-6xl">
            About Us
          </h2>
          <img className="h-6 w-20 mt-4" src={img2} alt="" />
          <p className="text-amber-50 text-end mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="font-['Cormorant_Upright'] w-32 h-10 bg-amber-200 mt-8">
            Know More
          </button>
        </div>

        <div className="flex flex-row ">
          <img className="w-96 ml-20 h-80" src={G} alt="" />
          <img
            className="w-28 h-[600px] relative right-60 bottom-30 "
            src={k}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center items-start w-80 mb-80 relative right-40 ">
          <h2 className="font-['Cormorant_Upright'] text-amber-100 text-6xl">
            Our History
          </h2>
          <img className="h-6 w-20 mt-4" src={img1} alt="" />
          <p className="text-amber-50 text-start mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="font-['Cormorant_Upright'] w-32 h-10 bg-amber-200 mt-8">
            Know More
          </button>
        </div>
      </div>

      {/* section3 */}
      <div className="flex flex-col justify-center items-center ">
        <p className="font-['Cormorant_Upright'] text-white text-xl">
          Menu that fits you palatte
        </p>
        <img className="w-20 mt-2 " src={img1} alt="" />
        <h1 className="font-['Cormorant_Upright'] text-amber-100 text-5xl mt-4">
          Today’s Special
        </h1>

        <div className="flex flex-row justify-center items-center gap-10 mt-8 ">
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-['Cormorant_Upright'] text-amber-50 text-3xl mt-4">
              Cocktails
            </h1>
            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                Chapel Hill Shiraz
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$56</p>
            </div>
            <p className="text-white ">AU | Bottle</p>

            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                Catena Malbec
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$59</p>
            </div>
            <p className="text-white">AR | Bottle</p>

            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                La Vieille Rosé
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$44</p>
            </div>
            <p className="text-white ">FR | 750 ml</p>

            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                Rhino Pale Ale
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$31</p>
            </div>
            <p className="text-white ">CA | 750 ml</p>

            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                Irish Guinness
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$26</p>
            </div>
            <p className="text-white ">IE | 750 ml</p>
          </div>

          <div>
            <img className="w-48 h-80" src={img3} alt="" />
          </div>

          <div className="flex flex-col justify-center items-start">
            <h1 className="font-['Cormorant_Upright'] text-amber-50 text-3xl mt-4">
              Wine & Beer
            </h1>
            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                Chapel Hill Shiraz
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$56</p>
            </div>
            <p className="text-white ">AU | Bottle</p>

            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                Catena Malbec
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$59</p>
            </div>
            <p className="text-white">AR | Bottle</p>

            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                La Vieille Rosé
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$44</p>
            </div>
            <p className="text-white ">FR | 750 ml</p>

            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                Rhino Pale Ale
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$31</p>
            </div>
            <p className="text-white ">CA | 750 ml</p>

            <div className="flex flex-row justify-center items-center gap-4">
              <h1 className="font-['Cormorant_Upright'] text-amber-100 text-xl mt-4 text-center">
                Irish Guinness
              </h1>
              <p className="text-white text-center mt-4">---------</p>
              <p className="text-white text-center mt-4">$26</p>
            </div>
            <p className="text-white ">IE | 750 ml</p>
          </div>
        </div>
        <button className="font-['Cormorant_Upright'] w-32 h-10 bg-amber-200 mt-8">
          View More
        </button>
      </div>

      {/* section 4 */}
      <div className="flex flex-row mt-20 gap-32 items-center justify-center p-8  ">
        <div>
          <img className="w-80 mt-10  `h-112.5`" src={imggg} alt="" />
        </div>

        <div className="flex flex-col justify-center items-start w-96">
          <p className="font-['Cormorant_Upright'] text-sm text-white">
            Chef’s Word
          </p>
          <img className="w-20 mt-2 " src={img1} alt="" />

          <h1 className="font-['Cormorant_Upright'] text-6xl lg:text-3xl font-bold text-amber-100 ">
            What we believe in
          </h1>
          <p className="text-gray-400 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            corporis aut, laborum unde ipsum sequi, alias, expedita ad cumque
            officia tempore officiis dolores a est ea rerum voluptatibus
            sapiente fugiat.{" "}
          </p>
          <p className="font-['Cormorant_Upright'] text-xl text-amber-100 mt-10">
            Kevin Luo
          </p>
          <p className="font-['Cormorant_Upright'] text-sm text-white mt-2">
            Chef & Founder
          </p>
          <p className="font-['Cormorant_Upright'] text-4xl text-white mt-8">
            Kevin Luo
          </p>
        </div>
      </div>

      {/* section4 */}
      <div className="mt-10">
        <img src={video} alt="" />
      </div>

      {/* section5 */}
      <div className="flex flex-row mt-10 gap-4 items-start justify-center ml-40">
        <img className="w-20 h-20" src={Group87} alt="" />

        <div className="flex flex-col justify-center items-start  mt-20 ml-4">
          <p className="font-['Cormorant_Upright'] text-sm text-white">
            Awards & recognition
          </p>
          <img className="w-20 mt-2 " src={img1} alt="" />

          <h1 className="font-['Cormorant_Upright'] text-6xl lg:text-5xl font-bold text-amber-100 ">
            Our Laurels
          </h1>

          <div className="flex flex-row mt-4 items-center ">
            <div className="flex flex-row mt-4 items-center w-60 ml-2">
              <img className="w-10 h-10" src={num1} alt="" />
              <div className="flex flex-col">
                <h3 className="font-['Cormorant_Upright'] text-6xl lg:text-xl font-bold text-amber-100 ml-2">
                  Bib Gourmond
                </h3>
                <h3 className="font-['Cormorant_Upright'] text-sm font-bold text-amber-50 ml-2">
                  Lorem ipsum dolor sit amet, consectetur.
                </h3>
              </div>
            </div>

            <div className="flex flex-row mt-4 items-center w-60 ml-2">
              <img className="w-10 h-10" src={num2} alt="" />
              <div className="flex flex-col">
                <h3 className="font-['Cormorant_Upright'] text-6xl lg:text-xl font-bold text-amber-100 ml-2">
                  Rising Star
                </h3>
                <h3 className="font-['Cormorant_Upright'] text-sm font-bold text-amber-50 ml-2">
                  Lorem ipsum dolor sit amet, consectetur.
                </h3>
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-4 items-center">
            <div className="flex flex-row mt-4 items-center  w-60 ml-2">
              <img className="w-10 h-10" src={num3} alt="" />
              <div className="flex flex-col">
                <h3 className="font-['Cormorant_Upright'] text-6xl lg:text-xl font-bold text-amber-100 ml-2">
                  AA Hospitality
                </h3>
                <h3 className="font-['Cormorant_Upright'] text-sm font-bold text-amber-50 ml-2">
                  Lorem ipsum dolor sit amet, consectetur.
                </h3>
              </div>
            </div>

            <div className="flex flex-row mt-4 items-center w-60 ml-2">
              <img className="w-10 h-10" src={num5} alt="" />
              <div className="flex flex-col">
                <h3 className="font-['Cormorant_Upright'] text-6xl lg:text-xl font-bold text-amber-100 ml-2">
                  Outstanding Chef
                </h3>
                <h3 className="font-['Cormorant_Upright'] text-sm font-bold text-amber-50 ml-2">
                  Lorem ipsum dolor sit amet, consectetur.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <img className="w-52 h-60 relative left-40 top-52 " src={G1} alt="" />
        <img className="w-80 rounded-l mr-52  " src={MaskGroup} alt="" />
      </div>
      {/* section6 */}
      <div className="h-60 mt-30 flex flex-row justify-center items-center ml-20  ">
        <div className="flex flex-col justify-center items-start  w-96">
          <p className="font-['Cormorant_Upright'] text-sm text-white">
            Instagram
          </p>
          <img className="w-20 mt-2 " src={img1} alt="" />
          <h1 className="font-['Cormorant_Upright'] text-3xl lg:text-4xl font-bold text-amber-100 mt-4 ">
            Photo Gallery
          </h1>
          <p className="text-amber-50 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button className="font-['Cormorant_Upright'] w-32 h-10 bg-amber-200 mt-8">
            View More
          </button>
        </div>

        <img className="w-50 ml-4" src={s1} alt="" />
        <img className="w-50 ml-4" src={s2} alt="" />
        <img className="w-50 ml-4" src={s3} alt="" />
        <img className="w-44 ml-4" src={s4} alt="" />
      </div>

      {/* section7 */}
      <div className="flex flex-row mt-30 gap-32 items-center justify-center ">
        <div className="flex flex-col justify-center items-start w-96">
          <p className="font-['Cormorant_Upright'] text-sm text-white">
            Contact
          </p>
          <img className="w-20 mt-2 " src={img1} alt="" />
          <h1 className="font-['Cormorant_Upright'] text-6xl lg:text-7xl font-bold text-amber-100 mt-4 ">
            Find Us
          </h1>
          <p className="text-gray-400 text-sm mt-4">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <h1 className=" font-['Cormorant_Upright'] text-xl lg:text-2xl  text-amber-100 mt-4 ">
            Opening Hours
          </h1>
          <p className="text-white text-sm mt-4">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="text-white text-sm mt-4">
            Sat - Sun: 10:00 am - 03:00 am
          </p>
          <button className="font-['Cormorant_Upright'] w-32 h-10 bg-amber-200 mt-8">
            Visit Us
          </button>
        </div>

        <div>
          <img className="w-80 mt-10 h-96" src={img11} alt="" />
        </div>
      </div>
      {/* section8 */}
      <div className="flex flex-row mt-30 gap-32 items-center justify-center  ">
        <div className="flex flex-col justify-center items-center border w-[900px] border-amber-50 p-14">
          <p className="font-['Cormorant_Upright'] text-sm text-white">
            Newsletter
          </p>
          <img className="w-20 mt-2 " src={img1} alt="" />
          <h1 className="font-['Cormorant_Upright'] text-3xl lg:text-4xl font-bold text-amber-100 mt-4 ">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-gray-400 text-sm mt-4">
            And never miss latest Updates!
          </p>

          <div>
            <input
              className="text-gray-300 w-96 mr-4 border border-amber-100 p-2 h-10"
              type="text"
              placeholder="Email Address"
            />
            <button className="font-['Cormorant_Upright'] w-32 h-10 bg-amber-200 mt-8">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* section9 */}
      <div className="flex flex-row mt-10 justify-center items-start gap-30">
        <div className="flex flex-col mt-20 justify-center items-center">
          <h3 className="font-['Cormorant_Upright'] text-amber-100 text-xl">
            Contact Us
          </h3>
          <p className=" text-sm text-gray-300 mt-10">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="mt-4 text-sm text-gray-300">+1 212-344-1230</p>
          <p className="mt-4 text-sm text-gray-300">+1 212-555-1230</p>
        </div>

        <div className="flex flex-col mt-20 justify-center items-center">
          <h3 className="font-['Cormorant_Upright'] text-amber-100 font-bold text-4xl">
            Gerícht
          </h3>
          <p className=" text-sm text-gray-300 mt-10">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <div className="flex flex-row justify-center items-center mt-8 gap-4">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>

        <div className="flex flex-col mt-20 justify-center items-center">
          <h3 className="font-['Cormorant_Upright'] text-amber-100 text-xl">
            Working Hours
          </h3>
          <p className=" text-sm text-gray-300 mt-10">Monday-Friday:</p>
          <p className="mt-4 text-sm text-gray-300">08:00 am -12:00 am</p>
          <p className="mt-4 text-sm text-gray-300">Saturday-Sunday:</p>
          <p className="mt-4 text-sm text-gray-300">07:00am -11:00 pm</p>
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 m-16">
        2026 Gerícht. All Rights reserved. Developed by Aml Mahrous
      </p>
    </>
  );
}

export default App;
