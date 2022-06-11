import { GetStaticProps } from 'next';
import { Radar } from '../components/Radar';
import { client } from '../lib/client';
import blipsQuery from '../query/blips';
import quadrantsQuery from '../query/quadrants';
import ringsQuery from '../query/rings';

type StaticProps = {
  blips: Blip[];
  quadrants: Sector[];
  rings: Sector[];
};

export default function Web(props: StaticProps) {
  return (
    <>
      <Radar blips={props.blips} />
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const blips = await client.fetch(blipsQuery);
  const quadrants = await client.fetch(quadrantsQuery);
  const rings = await client.fetch(ringsQuery);

  return {
    props: {
      blips,
      quadrants,
      rings,
    },
  };
};
