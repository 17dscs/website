import React, { useState } from "react";
import * as d3 from "d3";

const LABELS = [
  "No poverty",
  "Zero hunger",
  "Good Health and Well-being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Decent Work and Economy Growth",
  "Industry, Innovation, and Infrastructure",
  "Reduced Inequalities",
  "Sustainable cities and communities",
  "Responsible Consumption and Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice and Strong Institutions",
  "Partnerships",
];
const COLORS = [
  "#EB1C2D",
  "#D2A12A",
  "#279B48",
  "#C32136",
  "#EF4128",
  "#06ADD9",
  "#FEB614",
  "#8F1838",
  "#F36E29",
  "#E11284",
  "#F99E29",
  "#CF8E2A",
  "#3F7E45",
  "#1C97D3",
  "#59BA47",
  "#136A9F",
  "#14496B",
];

function translate(x, y) {
  return `translate(${x}, ${y})`;
}

class Slice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({ isHovered: true });
    this.props.setIsHovered(true);
  }

  onMouseOut() {
    this.setState({ isHovered: false });
    this.props.setIsHovered(false);
  }

  render() {
    let {
      value,
      label,
      fill,
      innerRadius = 0,
      outerRadius,
      cornerRadius,
      padAngle,
      ...props
    } = this.props;
    if (this.state.isHovered) {
      outerRadius *= 1.1;
    }
    let arc = d3.svg
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);
    return (
      <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} {...props}>
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
  }
}

class Pie extends React.Component {
  constructor(props) {
    super(props);
    this.colorScale = d3.scale.category10();
    this.renderSlice = this.renderSlice.bind(this);
  }

  render() {
    let { x, y, data } = this.props;
    let pie = d3.layout.pie();
    return (
      <g transform={translate(x, y)}>
        {pie(data.scale).map((value, i) =>
          this.renderSlice(value, i, data.label[i], data.color[i])
        )}
      </g>
    );
  }

  renderSlice(value, i, label, color) {
    let { innerRadius, outerRadius, cornerRadius, padAngle } = this.props;
    return (
      <Slice
        key={i}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        cornerRadius={cornerRadius}
        padAngle={padAngle}
        value={value}
        label={label}
        fill={color}
        setIsHovered={this.props.setIsHovered}
      />
    );
  }
}

const App = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let minViewportSize = Math.min(width, height);
  let radius = (minViewportSize * 0.9) / 2;
  let x = width / 2;
  let y = height / 2;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <svg width="100%" height="100%">
        <Pie
          x={x}
          y={y}
          innerRadius={radius * 0.8}
          outerRadius={radius}
          cornerRadius={6}
          padAngle={0.01}
          data={{
            scale: Array(17).fill(1),
            label: LABELS,
            color: COLORS,
          }}
          setIsHovered={setIsHovered}
        />
      </svg>
      {isHovered ? (
        <section className="main__section">
          <div>
            <h1>Preparing this Component...</h1>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default App;
