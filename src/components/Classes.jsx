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
    <div className='classes-body'>
       <h3>Unlimited Classes</h3>
       <div className="classes-card">
            <div className="classes-card-item">
                <img src={dietchart} />
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                        Dietitian
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Ryan Scott </span>
                    </div>
                </div>
                
            </div>
            <div className="classes-card-item">
                <img src={personal_training} />
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                        Personal Training
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Kevin McCormick </span>
                    </div>
                </div>
            </div>
            <div className="classes-card-item">
                <img src={running} />
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                       Running
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Russell Lane </span>
                    </div>
                </div>
            </div>
            <div className="classes-card-item">
                <img src={weight_loss} />
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                       Weight Loss
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Ryan Knight </span>
                    </div>
                </div>
            </div>
            <div className="classes-card-item">
                <img src={dance} />
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                        Dance
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Cole Robertson </span>
                    </div>
                </div>
            </div>
            <div className="classes-card-item">
                <img src={yoga} />
                <div className="classes-card-item-sub">
                    <div className='classes-card-item-text'>
                        Yoga
                        <br/>
                        <span className='classes-card-item-innertext'><FaUserAlt color='rgba(230, 117, 30, 0.969)' className='classes-logo'/> Randy Riveria </span>
                    </div>
                </div>
            </div>            
       </div>
    </div>
  )
}

export default Classes
