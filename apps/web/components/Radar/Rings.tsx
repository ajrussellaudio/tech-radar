import { FC } from 'react';

export type RingsProps = {
  width: number;
  height: number;
  margin: { top: number; right: number; bottom: number; left: number };
  radius: number;
};

export function Rings({ height, radius, width }: RingsProps) {
  const NUM_RINGS = 4;
  const center = { x: width / 2, y: height / 2 };

  const depths = Array.from({ length: NUM_RINGS }, (_, i) => i + 1);
  return (
    <>
      {depths.map((depth) => (
        <circle cx={center.x} cy={center.y} r={(radius * depth) / 4} stroke="silver" fill="transparent" />
      ))}
    </>
  );
}
