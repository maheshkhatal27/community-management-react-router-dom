import Navbar from "../Navbar";
import { WiFire } from "react-icons/wi";
import { GrGamepad } from "react-icons/gr";
import { IoIosFitness } from "react-icons/io";
import { TiDeviceLaptop } from "react-icons/ti";
import { WiDaySunny } from "react-icons/wi";
import { BiBone } from "react-icons/bi";
import "./index.css"


 const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-container">
        <nav className="about-navbar">
            <h1 className="about-us">About Us</h1>
        </nav>
        <div className="icon-container">
              <div className="each-icon-container">
                <div>
                        <WiFire size="120px" />
                    </div>
                    <div class="icon-desc-container">
                        <h1 class="icon-name">Jaw-dropping courtyard</h1>
                        <p class="icon-item-desc">Resort style swimming pool,cabanas,<br/>
                        outdoor kitchen, fire pit & lounge area    
                        </p>
                    </div>
              </div>
              <div className="each-icon-container">
                <div>
                    <GrGamepad size="90px" />
                </div>
                <div class="icon-desc-container">
                    <h1 class="icon-name">Tricked out game room</h1>
                    <p class="icon-item-desc">Theater, gaming consoles, bar & plenty of room to mingle
                    </p>
                </div>
              </div>
              <div className="each-icon-container">
                <div>
                    <IoIosFitness size="90px" />
                </div>
                <div class="icon-desc-container">
                    <h1 class="icon-name">Fully-loaded fitness center</h1>
                    <p class="icon-item-desc">Free weights, cardiot, cross training machines & yoga/pilates/spin studio
                    </p>
                </div>
              </div>
              <div className="each-icon-container">
                <div>
                    <TiDeviceLaptop size="90px" />
                </div>
                <div class="icon-desc-container">
                    <h1 class="icon-name">24/& work lounge</h1>
                    <p class="icon-item-desc">Private study rooms,coffee bar, printer & computer workstations    
                    </p>
                </div>
              </div>
              <div className="each-icon-container">
                <div>
                    <WiDaySunny size="90px" />
                </div>
                <div class="icon-desc-container">
                    <h1 class="icon-name">Climate controlled corridors</h1>
                    <p class="icon-item-desc">Stay out of the summer heat in the climate-controlled hallways.
                    </p>
                </div>
              </div>
              <div className="each-icon-container">
                <div>
                    <BiBone size="90px" />
                </div>
                <div class="icon-desc-container">
                    <h1 class="icon-name">Pet park</h1>
                    <p class="icon-item-desc">An easy way for you and your pet to enjoy some quality time outdoors 
                    and meet new friends    
                    </p>
                </div>
              </div>
              

        </div>
    </div>
    </>
  )}

  export default About