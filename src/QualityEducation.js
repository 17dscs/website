import React, { useEffect } from "react";
import Dscomponent from "./dscomponent";

export const QualityEducation = () => {
  useEffect(() => {
    new Dscomponent("dscomponent");
  }, []);
  return (
    <>
      <section className="quality-education">
        <h1>4. QualityEducation</h1>
        <p>
          Put your mouse inside the canvas. Then the chart will change. Up to the chart's peak is static data about the percentage of
          affected learners by COVID-19 and subsequent data is dynamic.
        </p>
        <div>
          <div className="color-description">
            <div className="color-square-red"></div>
            <div>affected Learner</div>
          </div>
          <div className="color-description">
            <div className="color-square-blue"></div>
            <div>Total Learner - affected Learner</div>
          </div>
        </div>
        <div id="dscomponent" style={{ width: "400px", height: "300px", border: "3px solid black", marginTop: "4px" }}></div>
      </section>
    </>
  );
};
