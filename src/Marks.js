export const Marks = ({ data, xScale, yScale, xValue, yValue }) =>
  data.map(d => (
    <rect
      className="mark"
      key={d.Country}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    />
  ));