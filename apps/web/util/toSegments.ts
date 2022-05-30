type SegmentedBlips = Record<Sector['_id'], Record<Sector['_id'], Blip[]>>;

export function toSegments(blips: Blip[]): SegmentedBlips {
  return blips.reduce((prev: SegmentedBlips, curr) => {
    return {
      ...prev,
      [curr.quadrant._id]: {
        ...prev[curr.quadrant._id],
        [curr.ring._id]: [...(prev[curr.quadrant._id] ? prev[curr.quadrant._id][curr.ring._id] || [] : []), curr],
      },
    };
  }, {});
}
