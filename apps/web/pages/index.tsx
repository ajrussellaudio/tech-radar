import { Radar } from '../components/Radar';
import { client } from '../lib/client';

export default function Web(props: { blips: Blip[] }) {
  return (
    <>
      <Radar blips={props.blips} />
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
}

const query = `*[_type == "blips"]{
  _id, name, description, isNew,
  quadrant->,
  ring->,
}`;

export async function getStaticProps() {
  const blips = await client.fetch(query);

  return {
    props: {
      blips,
    },
  };
}
