// components/CounterSection.jsx
import React from "react";
import useCountUp from "../../Hooks/useCountUp";
// import "./CounterSection.css"; // Optional, if you have styles
import award from '../../assets/img/tff-award.png'

const counters = [
  { target: 4, suffix: ".3", label: "User Ratings" },
  { target: 50, prefix: "$", suffix: "k+", label: "User Payouts" },
  { target: 5, suffix: "k+", label: "Active Traders" },
  { target: 2, prefix: "$", suffix: "m", label: "Scale Upto" },
  { target: 24, suffix: "h", label: "Avg Processing Time" },
];

const CounterItem = ({ target, prefix, suffix, label }) => {
  const [count, ref] = useCountUp(target);

  return (
    <div
      ref={ref}
      className="col-lg-2 col-sm-6 col-md-2 counter-item d-flex align-items-center justify-content-start"
    >
      {prefix && <span className="spc-char">{prefix}</span>}
      <span className="counter-number">{count}</span>
      {suffix && <span>{suffix}</span>}
      <p dangerouslySetInnerHTML={{ __html: label.replace(" ", "<br/>") }} />
    </div>
  );
};

const CounterSection = () => {
  return (
    <section className="counter-bg">
      <div className="container postin">
        <div className="row counter-section text-left justify-content-center align-items-center">
          {counters.map((item, i) => (
            <React.Fragment key={i}>
              <CounterItem {...item} />
              {i < counters.length - 1 && (
                <div className="col-auto d-none d-md-block">
                  <div className="divider"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-9">
          <div className="element-bg col-12 col-md-12 col-lg-12 card1">
            <div className="row align-items-center">
              {/* Image Side */}
              <div className="col-lg-6 image-side d-flex align-items-right justify-content-center">
                <img src={award} alt="Award" />
              </div>

              {/* Content Side */}
              <div className="col-lg-5 content md-offset-1 col-lg-6">
                <div className="element-title">
                  Celebrating{" "}
                  <span className="gradient-text" data-text="Excellence!">
                    Excellence!
                  </span>
                </div>
                <div className="smalltitle">Trader Choice Prop Firm Of the Year..</div>
                <div className="description">
                  We are proud to announce that we have been named Trader’s Choice Prop Firm of the Year 2024 at the PROFX Awards Dubai! This honor reflects our dedication to innovation and excellence in the forex trading industry.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
