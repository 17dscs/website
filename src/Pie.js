import React from "react";
import * as d3 from "d3";
import { Slice, translate } from "./Slice";

export const Pie = ({
  x,
  y,
  data,
  // setSectionNumber,
  // innerRadius,
  // outerRadius,
  // cornerRadius,
  // padAngle,
  ...props
}) => {
  // let colorScale = d3.scale.category10();
  let pie = d3.layout.pie();
  const renderSlice = (value, i, label, color) => {
    return (
      <Slice
        key={i}
        id={i}
        value={value}
        label={label}
        fill={color}
        // innerRadius={innerRadius}
        // outerRadius={outerRadius}
        // cornerRadius={cornerRadius}
        // padAngle={padAngle}
        // setSectionNumber={setSectionNumber}
        {...props}
      />
    );
  };
  return (
    <g transform={translate(x, y)}>
      {pie(data.scale).map((value, i) =>
        renderSlice(value, i, data.label[i], data.color[i])
      )}
    </g>
  );
};
