export type AxesProps = {
  width: number;
  height: number;
  margin: { top: number; right: number; bottom: number; left: number };
  radius: number;
};

export function Axes({ height, width, margin, radius }: AxesProps) {
  return (
    <>
      <line
        x1={margin.left}
        y1={margin.top + radius}
        x2={width - margin.right}
        y2={margin.top + radius}
        stroke="silver"
      />
      <line
        x1={margin.left + radius}
        y1={margin.top}
        x2={margin.left + radius}
        y2={height - margin.bottom}
        stroke="silver"
      />
    </>
  );
}
