import React, { useState, useEffect } from "react";
import { Pie } from "./Pie";
import { labels, colors } from "./arrays";
import { QualityEducation } from "./QualityEducation";

const App = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let minViewportSize = Math.min(width, height);
  // set size of pie - ver1: 0.9
  let radius = (minViewportSize * 0.98) / 2;
  let x = width / 2;
  let y = height / 2;
  const defaultRate = 0.7;
  const [sectionNumber, setSectionNumber] = useState(-1);
  const [isClicked, setIsClicked] = useState(false);
  const [rate, setRate] = useState(defaultRate);
  useEffect(() => {
    isClicked ? setRate(0.95) : setRate(defaultRate);
  }, [isClicked]);
  return (
    <>
      <svg width="100%" height="100%">
        <Pie
          x={x}
          y={y}
          data={{
            scale: Array(17).fill(1),
            label: labels,
            color: colors,
          }}
          innerRadius={radius * rate}
          outerRadius={radius}
          cornerRadius={6}
          padAngle={0.01}
          sectionNumber={sectionNumber}
          setSectionNumber={setSectionNumber}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      </svg>
      {sectionNumber > -1 ? (
        sectionNumber === 3 ? (
          isClicked ? (
            // detail
            <QualityEducation />
          ) : (
            // preview
            <section className="preview qe">
              <h1>Preview of QE</h1>
            </section>
          )
        ) : (
          //preparing..
          <section className="preview">
            <h1>Preparing...</h1>
          </section>
        )
      ) : null}
    </>
  );
};

export default App;
