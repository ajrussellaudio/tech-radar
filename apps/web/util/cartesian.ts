export function cartesian(polar: Polar): Cartesian {
  const x = polar.radius * Math.cos(polar.angle);
  const y = polar.radius * Math.sin(polar.angle);
  return { x, y };
}
