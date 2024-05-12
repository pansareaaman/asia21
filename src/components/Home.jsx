import React from 'react';
import '../style/section1.css';
import GYM from '../assets/gym.jpg'
import Coverimg from '../assets/gym.jpg';
import img2 from '../assets/gym2.webp';
const Home = () => {
  return (
    <div>
        <div className="backimg">
        <section class="head-text">
            <p>SHAPE YOUR BODY</p>
            <h1>BE <span>STRONG</span></h1>
            <h1><span>TRAIN </span>HARD</h1>
        </section>
            <img src={Coverimg} alt="" />

        
        </div>


        <div className="sec1-part2">
            <div className="video-part">
            
            <iframe width="100%" height="300px"  src="https://www.youtube.com/embed/qBjZ3Osp5fo?si=vtdKvT54MP9qTUrx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="info-part">
            <h1>STORY ABOUT US</h1>
            <h4>Welcome to Asia21 Fitness Club, your premier destination for fitness and wellness in Pune, India.</h4>

At Asia21, we are dedicated to helping you achieve your fitness goals, whether you're a beginner or a seasoned athlete. Our state-of-the-art facilities, experienced trainers, and diverse range of classes make us the ultimate fitness destination in Pune.
            </div>
        </div>  

        <div className="sec1-part3">
          <div className="part1">
            <img src={img2} alt="gym" />
          </div>
          <div className="part2">
            <div className="card">
              one
            </div>
            <div className="card">
              two
            </div>
            <div className="card">
              three
            </div>
            <div className="card">
              four
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Home
