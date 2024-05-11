import React from 'react';
import '../style/section1.css';
import GYM from '../assets/gym.jpg'
import Coverimg from '../assets/gym.jpg';
import img2 from '../assets/gym2.webp';
import { GoGoal } from "react-icons/go";
import { PiFlowerLotus } from "react-icons/pi";
import { CiDumbbell } from "react-icons/ci";
import { GiWeightLiftingUp } from "react-icons/gi";
const Section1 = () => {
  return (
    <div>
      {/* <div className="backimg">
        <section class="head-text">
          <p>SHAPE YOUR BODY</p>
          <h1>BE <span>STRONG</span></h1>
          <h1><span>TRAIN </span>HARD</h1>
        </section>
        <img src={Coverimg} alt="" />
      </div>


      <div className="sec1-part2">
        <div className="video-part">

          <iframe width="100%" height="300px" src="https://www.youtube.com/embed/qBjZ3Osp5fo?si=vtdKvT54MP9qTUrx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="info-part">
          <h1>STORY ABOUT US</h1>
          <h4>Welcome to Asia21 Fitness Club, your premier destination for fitness and wellness in Pune, India.</h4>

          At Asia21, we are dedicated to helping you achieve your fitness goals, whether you're a beginner or a seasoned athlete. Our state-of-the-art facilities, experienced trainers, and diverse range of classes make us the ultimate fitness destination in Pune.
        </div>
      </div> */}
      <div className="sec1-part3">
        <div className="part1">
          <img src={img2} alt="gym" />
        </div>
        <div className="part2">
          <div className="card card-item1">
            <div className='card-logo' >
              <GoGoal />
            </div>
            <h4>Strategies</h4>
            <div className="card-text">
              Transform your fitness journey with expert guidance, state-of-the-art facilities, and diverse classes at Asia21 Fitness Club
            </div>
          </div>
          <div className="card card-item2">
            <div className='card-logo' >
              <CiDumbbell />
            </div>
            <h4>Yoga</h4>
            <div className="card-text">
              Discover the synergy of yoga and gym workouts for holistic fitness.
            </div>
          </div>
          <div className="card card-item3">
          <div className='card-logo' >
              <PiFlowerLotus />
            </div>
            <h4>Workout</h4>
            <div className="card-text">
            Transform your body with our dynamic gym workouts tailored for all fitness levels.  
            </div>
          </div>
          <div className="card card-item4">
          <div className='card-logo' >
              <GiWeightLiftingUp />
            </div>
            <h4>Weight Loss</h4>
            <div className="card-text">
            Lose weight, gain health: Transform your body and life with our proven weight loss solutions.
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section1
