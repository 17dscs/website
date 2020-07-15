import React from "react";
import * as d3 from "d3";

export const QualityEducation = () => {
  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

  const w = 300;
  const h = 100;

  const svg = d3
    .select(".past")
    .append("svg")
    // .attr("width", w)
    // .attr("height", h);
    .attr("viewBox", `0 0 ${w} ${h}`);

  svg
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 30)
    .attr("y", (d, i) => h - 3 * d)
    .attr("width", 25)
    .attr("height", (d, i) => 3 * d)
    .attr("fill", "navy");
  return (
    <>
      <section className="quality-education">
        <div className="chart">
          <div className="past">#past</div>
          <div className="present">#present</div>
          <div className="future">#future</div>
        </div>
        <div>#placeholder</div>
        <div className="user-action">#user-action</div>
      </section>
    </>
  );
};
