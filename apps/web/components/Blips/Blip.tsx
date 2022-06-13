import { Group } from '@visx/group';
import { Circle } from '@visx/shape';
import { Text } from '@visx/text';
import { useState } from 'react';

export type BlipProps = {
  x: number;
  y: number;
  radius: number;
  title: string;
};

export function Blip({ x, y, radius, title }: BlipProps) {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  function showTitle() {
    setIsTitleVisible(true);
  }

  function hideTitle() {
    setIsTitleVisible(false);
  }

  return (
    <Group>
      <Circle cx={x} cy={y} r={radius} onMouseEnter={showTitle} onMouseLeave={hideTitle} />
      {isTitleVisible && (
        <Text x={x + radius} y={y}>
          {title}
        </Text>
      )}
    </Group>
  );
}
