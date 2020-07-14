import React, { useState } from "react";
import * as d3 from "d3";

export const translate = (x, y) => `translate(${x}, ${y})`;
export const Slice = ({
  value,
  label,
  fill,
  innerRadius = 0,
  outerRadius,
  cornerRadius,
  padAngle,
  sectionNumber,
  setSectionNumber,
  isClicked,
  setIsClicked,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseOver = (event) => {
    // console.log(event.currentTarget.childNodes[1].childNodes[0]); // get innerText
    setIsHovered(true);
    !isClicked && setSectionNumber(parseInt(event.currentTarget.id));
  };

  const onMouseOut = () => {
    setIsHovered(false);
    !isClicked && setSectionNumber(-1);
  };

  const handleClick = () => {
    sectionNumber === 3 && setIsClicked(!isClicked);
  };

  if (isHovered) {
    outerRadius *= 1.1;
  }
  let arc = d3.svg
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .cornerRadius(cornerRadius)
    .padAngle(padAngle);
  return (
    <g
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={handleClick}
      {...props}
    >
      <path d={arc(value)} fill={fill} />
      <text
        transform={translate(...arc.centroid(value))}
        dy=".35em"
        className="label"
      >
        {label}
      </text>
    </g>
  );
};
