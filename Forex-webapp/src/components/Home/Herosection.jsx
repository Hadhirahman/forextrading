import React from 'react';
import 'animate.css'
import posterImg from '../../assets/img/slider_009.jpg';

const HeroSection = () => {
  return (
    <section className="slider-bg">
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="slider-video"
    poster={posterImg}
  >
    <source src="assets/img/slider.mp4" type="video/mp4" />
    <source src="assets/img/slider.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  <div className="banner postin" style={{ height: '100%' }}>
    <div className="container text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
      <h2 className="start1 banner-title fade-in white-stroke">
        Join the Leaders in
      </h2>
      <h2 className="start1 banner-subtitle typing-effect white-stroke">
        Funded <span className="gradient-stroke" data-text=" Trading">Trading</span>
      </h2>
      <p className="animate__animated animate__fadeInDown" style={{ animationDuration: '2s' }}>
        <span>
          Trade a $200K funded simulated account, keep up to 90% of profits,
          and grow risk-free!
        </span>
      </p>

      <div className="button-group mt-5 animate__animated animate__fadeInDown" style={{ animationDuration: '2s' }}>
        <a href="https://app.tradefxfunds.com/register/">
          <button className="slide-button mb-res-10">
            <span className="slide-content">
              <span className="text">
                <i className="bx bx-bolt-circle"></i> Get Funded
              </span>
              <span className="icon">
                <i className="fas fa-arrow-right"></i>
              </span>
            </span>
          </button>
        </a>

        <a href="./join_competition">
          <button className="shine-button ml-1">
            <span className="shine-content">
              <i className="bx bxs-id-card"></i> Join Competition
            </span>
          </button>
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
