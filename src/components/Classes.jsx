import React from 'react';
import '../style/classes.css';
import yoga from '../assets/yoga.jpg';
import dietchart from '../assets/dietchart.jpg';
import personal_training from '../assets/personal_training.jpg';
import running from '../assets/running.jpg';
import weight_loss from '../assets/weight _loss.webp';
import dance from '../assets/dance.webp';
import { FaUserAlt } from "react-icons/fa";
const Classes = () => {
  return (
    <>
      {/* <div>
        <img src={bgimg} alt="" className="gallery-upper" />
        <h1 className="h1-gallery-over">UNLIMITED CLASSES</h1>
      </div> */}
    <div className='classes-body'>
       <h3>Unlimited Classes</h3>
       <div className="classes-card">
            <div className="classes-card-item">
                <img src={dietchart} alt="Diet"/>
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                        Dietitian
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Ryan Scott </span>
                        <br/>
                        <span className='classes-card-item-info'>Dietitians can offer personalized nutrition advice tailored to individual fitness goals, whether it's weight loss, muscle gain, or overall health improvement. </span>
                    </div>
                </div>
                
            </div>
            <div className="classes-card-item">
                <img src={personal_training} alt="personal_training" />
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                        Personal Training
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Kevin McCormick </span>
                        <span className='classes-card-item-info'>Sweat sculpted into strength, every rep a step towards your best self. In the gym, transformation is forged through dedication and guidance.</span>
                    </div>
                </div>
            </div>
            <div className="classes-card-item">
                <img src={running} alt="running" />
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                       Running
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Russell Lane </span>
                        <span className='classes-card-item-info'>
                            In the gym, runners push their limits, feet pounding the treadmill in rhythmic harmony. Sweat beads glisten under fluorescent lights, determination etched on every face. With each stride, they chase goals, fueling their passion for fitness one step at a time.
                        </span>
                    </div>
                </div>
            </div>
            <div className="classes-card-item">
                <img src={weight_loss} alt="weight_loss"/>
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                       Weight Loss
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Ryan Knight </span>
                        <span className='classes-card-item-info'>
                            Consistent workouts, balanced nutrition, and ample rest foster effective weight loss in the gym. Incorporate cardio and strength training to boost metabolism and burn calories.
                        </span>
                    </div>
                </div>
            </div>
            <div className="classes-card-item">
                <img src={dance} alt="Dance"/>
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                        Dance
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Cole Robertson </span>
                        <span className='classes-card-item-info'>Dancing in the gym can be so much fun! Whether you're practicing a routine, taking a dance class, or just letting loose with friends, the gym provides a spacious and often mirrored environment perfect for dancing.</span>
                    </div>
                </div>
            </div>
            <div className="classes-card-item">
                <img src={yoga} alt="Yoga" />
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                        Yoga
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Randy Riveria </span>
                        <span className='classes-card-item-info'>Yoga in a gym setting can offer a unique environment for practicing yoga. ASIA21 offers yoga classes as part of their fitness offerings.  </span>
                    </div>
                </div>
            </div>            
       </div>
    </div>
    </>
  )
}

export default Classes
