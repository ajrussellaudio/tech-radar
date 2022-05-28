import { client } from '../lib/client';

export default function Web(props: unknown) {
  return <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(props, null, 2)}</pre>;
}

export async function getStaticProps() {
  const blips = await client.fetch(`*[_type == "blips"]`);

  return {
    props: {
      blips,
    },
  };
}
